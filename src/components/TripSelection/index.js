import InputField from '../InputField';
import './TripSelection.css';
import { useState } from 'react';
import SelectOption from '../SelectOption';
import { AiTwotoneCalendar } from 'react-icons/ai'
import { GiRoad } from 'react-icons/gi'
import { SlPeople, SlPlane } from 'react-icons/sl'

const TripSelection = (props) => {

    const [section, setSection] = useState('Ida');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [passenger, setPassenger] = useState('1 adulto(s)');

    const flights = [
        {
            name: 'Brasil'
        },
        {
            name: 'Japao'
        },
        {
            name: 'Italia'
        }
    ];

    return (
        <fieldset id="flight-form-p-1" role="tabpanel" className="flight_fieldset_aba body current" cod="1">
            <div class="fieldset-content">
                <InputField 
                    type="text"
                    label="Trecho"
                    placeholder="Informe o trecho"
                    class="required"
                    value={section}
                    id="trecho"
                    disabled={true}
                    whenChanged={value => setSection(value)} 
                    icon={<GiRoad size={25} />}
                />
                <SelectOption
                    label="Saindo de"
                    id="saindo"
                    class="required"
                    required={true}
                    itens={flights.map(destino => destino.name)} 
                    value={departure} 
                    whenChanged={value => setDeparture(value)}
                    icon={<SlPlane size={25} />}
                />
                <SelectOption
                    label="Indo de"
                    id="indo"
                    class="required"
                    required={true}
                    itens={flights.map(destino => destino.name)} 
                    value={arrival} 
                    whenChanged={value => setArrival(value)}
                    icon={<SlPlane size={25} style = {{transform: 'rotateY(180deg)' }} />}
                />
                <InputField 
                    type="date"
                    label="Data da viagem de ida"
                    placeholder="Informe a data da viagem"
                    class="required"
                    value={departureDate}
                    id="dataIda"
                    disabled={false}
                    whenChanged={value => setDepartureDate(value)} 
                    icon={<AiTwotoneCalendar size={25} />}
                />
                <InputField 
                    type="date"
                    label="Data da viagem de volta"
                    placeholder="Informe a data de volta"
                    class="required"
                    value={arrivalDate}
                    id="dataIda"
                    disabled={false}
                    whenChanged={value => setArrivalDate(value)}
                    icon={<AiTwotoneCalendar size={25} />}
                />
                <InputField 
                    type="text"
                    label="Passageiros"
                    placeholder="Informe os passageiros"
                    class="required"
                    value={passenger}
                    id="passageiro"
                    disabled={true}
                    whenChanged={value => setPassenger(value)}
                    icon={<SlPeople size={25} />}
                />
            </div>
        </fieldset>
    )

}

export default TripSelection;