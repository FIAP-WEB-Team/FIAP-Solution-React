(function ($) {

    $(document).on('click', '#btnNext', function () {
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

        if (step == "1") {
            $('#flight-form-p-' + step + ' .required').each(function (i, obj) {
                if ($(obj).val() == '' || $(obj).val() == null) {
                    $(obj).css({ 'border-color': '#F00' });
                    error++;
                }
            });
        } else if (step == "2") {
            if (!$('input.card-radio:checked').val()) {
                error++;
            }
        } else {
            alert('A DESENVOLVER...');
            return false;
        }

        if (error > 0) {
            $.notify("Preencha todos os campos para prosseguir!", "warn");
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
        } else {
            $('#btnPrevious').css({ 'display': '' });
            $('#btnNext').html('Concluir');

            $('.flight-form-step-li[cod="1"]').addClass('done');
            $('.flight-form-step-li[cod="2"]').addClass('done');
            $('.flight-form-step-li[cod="3"]').addClass('done');
        }

        $('.flight_fieldset_aba[cod="' + step + '"]').css({ 'display': '' });
        $('#form-step-span').html('Step ' + step + ' of 3');
        $('#form-step-span').attr('step', step);
    }

    $(document).on('focus', '.required', function () {
        $(this).css({ 'border-color': '' });
    });

})(jQuery);