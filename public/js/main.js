(function ($) {
    const cors = 'https://corsanywhere.herokuapp.com/';

    $(document).ready(async function () {
        const token = await generateToken();
        const flights = await getFlights(token.token);

        let count = 1;
        $.each(flights, function (i, item) {
            $('#departure').append($('<option>', {
                value: item.Departure,
                text: item.Departure
            }));

            $('#arrival').append($('<option>', {
                value: item.Arrival,
                text: item.Arrival
            }));

            $('.content-card').append(''
                + '<div>'
                + '<input type="radio" class="card-radio" name="rd" id="radioList' + count + '" value="' + item.FlightNumber + '" />'
                + '<label for="radioList' + count + '" class="box radioLabel' + count + '" >'
                + '<div class="plan">'
                + '<span class="circle"></span>'
                + '<span class="description">' + item.Departure + ' -> ' + item.Arrival + '</span>'
                + '</div>'
                + '<div class="sub-description">'
                + '<span class="price">&nbsp;&nbsp;R$ ' + item.Price + '&nbsp;&nbsp;</span><br />'
                + '<span class="date-departure">' + moment(item.DepartureDate).format("DD/MM/YYYY hh:mm") + '</span>'
                + '</div>'
                + '</label>'
                + '</div>');
            count++;
        });

        return false;
    });

    $(document).on('click', '#btnNext', async function () {
        var step = $('#form-step-span').attr('step');
        if (validation(step)) {
            step++;
            nextStep(step);
        }
    });

    $(document).on('click', '#btnPrevious', function () {
        var step = $('#form-step-span').attr('step');
        step--;
        nextStep(step);
    });

    function validation(step) {
        var error = 0;

        if (step == "2") {
            if (!$('input.card-radio:checked').val()) {
                error++;
            }
        } else {
            $('#flight-form-p-' + step + ' .required').each(function (i, obj) {
                if ($(obj).val() == '' || $(obj).val() == null) {
                    $(obj).css({ 'border-color': '#F00' });
                    error++;
                }
            });
        }

        if (error > 0) {
            if (step == "2")
                var errorMsg = "Selecione um voo para prosseguir!"
            else
                var errorMsg = "Preencha todos os campos para prosseguir!"
            $.notify(errorMsg, "warn");
            return false;
        } else {
            return true;
        }

    }

    function nextStep(step) {
        $('.flight_fieldset_aba').css({ 'display': 'none' });
        $('.flight-form-step-li').removeClass('done');

        if (step == "1") {
            $('#btnPrevious').css({ 'display': 'none' });
            $('#btnNext').html('Proximo');

            $('.flight-form-step-li[cod="1"]').addClass('done');
        } else if (step == "2") {
            $('#btnPrevious').css({ 'display': '' });
            $('#btnNext').html('Proximo');

            $('.flight-form-step-li[cod="1"]').addClass('done');
            $('.flight-form-step-li[cod="2"]').addClass('done');
        } else if (step == "3") {
            $('#btnPrevious').css({ 'display': '' });
            $('#btnNext').html('Concluir');

            $('.flight-form-step-li[cod="1"]').addClass('done');
            $('.flight-form-step-li[cod="2"]').addClass('done');
            $('.flight-form-step-li[cod="3"]').addClass('done');
        } else {
            saveInfo();
        }

        $('.flight_fieldset_aba[cod="' + step + '"]').css({ 'display': '' });
        $('#form-step-span').html('Passo ' + step + ' de 4');
        $('#form-step-span').attr('step', step);
    }

    $(document).on('focus', '.required', function () {
        $(this).css({ 'border-color': '' });
    });

    async function saveInfo() {
        const flightId = $('input.card-radio:checked').val();
        let birthDate_aux = $('input[name="tbBirthDate"]').val().split('-');
        const birthDate = birthDate_aux[2] + '/' + birthDate_aux[1] + '/' + birthDate_aux[0];
        const firstName = $('input[name="tbFirstName"]').val();
        const lastName = $('input[name="tbLastName"]').val();
        const gender = $('input[name="tbGender"]').val();
        const nationality = $('input[name="tbNationality"]').val();

        const token = await generateToken();
        const checkPassenger = await setPassenger(token.token, birthDate, firstName, lastName, gender, nationality);
        await setTicket(token.token, flightId, checkPassenger.PassengerID);

        alert('Concluido...');
        location.reload();
        return false;
    }

    function generateToken() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: 'post',
                url: cors + 'http://springserver.apfqbxg2d0agcahk.brazilsouth.azurecontainer.io:8080/users/login',
                contentType: 'application/json',
                data: JSON.stringify
                    (
                        {
                            "username": "abana",
                            "password": "rabana"
                        }
                    ),
                cache: false,
                credentials: true,
                beforeSend: function () {
                    console.log('Sending request to generate token...');
                },
                success: function (response) {
                    console.log(response);
                    resolve(response);
                },
                error: function (err) {
                    console.log(err);
                    reject(err);
                }
            });
        });
    }

    function setPassenger(token, birthDate, firstName, lastName, gender, nationality) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: 'post',
                url: cors + 'http://springserver.apfqbxg2d0agcahk.brazilsouth.azurecontainer.io:8080/passengers',
                headers: { 'Authorization': 'Bearer ' + token },
                contentType: 'application/json',
                data: JSON.stringify
                    (
                        {
                            "BirthDate": birthDate,
                            "FirstName": firstName,
                            "LastName": lastName,
                            "Gender": gender,
                            "Nationality": nationality
                        }

                    ),
                cache: false,
                credentials: true,
                beforeSend: function () {
                    console.log('Setting passenger... ');
                },
                success: function (response) {
                    console.log(response);
                    resolve(response);
                },
                error: function (err) {
                    console.log(err);
                    reject(err);
                }
            });
        });
    }

    function getFlights(token) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: 'get',
                url: cors + 'http://springserver.apfqbxg2d0agcahk.brazilsouth.azurecontainer.io:8080/flights',
                headers: { 'Authorization': 'Bearer ' + token },
                cache: false,
                credentials: true,
                beforeSend: function () {
                    console.log('Getting flights info... ');
                },
                success: function (response) {
                    console.log(response);
                    resolve(response);
                },
                error: function (err) {
                    console.log(err);
                    reject(err);
                }
            });
        });
    }

    function setTicket(token, flightId, passengerId) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: 'post',
                url: cors + 'http://springserver.apfqbxg2d0agcahk.brazilsouth.azurecontainer.io:8080/tickets',
                headers: { 'Authorization': 'Bearer ' + token },
                contentType: 'application/json',
                data: JSON.stringify
                    (
                        {
                            "flightID": flightId,
                            "passengerID": passengerId
                        }

                    ),
                cache: false,
                credentials: true,
                beforeSend: function () {
                    console.log('Setting ticket... ');
                },
                success: function (response) {
                    console.log(response);
                    resolve(response);
                },
                error: function (err) {
                    console.log(err);
                    reject(err);
                }
            });
        });
    }

})(jQuery);