import InputField from '../InputField';
import './TripSelection.css';
import { useState } from 'react';
import SelectOption from '../SelectOption';
import { AiTwotoneCalendar } from 'react-icons/ai'
import { GiRoad } from 'react-icons/gi'
import { SlPeople, SlPlane } from 'react-icons/sl'

const TripSelection = (props) => {

    const [trecho, setTrecho] = useState('Ida');
    const [saindo, setSaindo] = useState('');
    const [indo, setIndo] = useState('');
    const [dataIda, setDataIda] = useState('');
    const [dataVolta, setDataVolta] = useState('');
    const [passegeiro, setPassageiro] = useState('1 adulto(s)');

    const destinos = [
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
                    value={trecho}
                    id="trecho"
                    disabled={true}
                    whenChanged={value => setTrecho(value)} 
                    icon={<GiRoad size={25} />}
                />
                <SelectOption
                    label="Saindo de"
                    id="saindo"
                    class="required"
                    required={true}
                    itens={destinos.map(destino => destino.name)} 
                    value={saindo} 
                    whenChanged={value => setSaindo(value)}
                    icon={<SlPlane size={25} />}
                />
                <SelectOption
                    label="Indo de"
                    id="indo"
                    class="required"
                    required={true}
                    itens={destinos.map(destino => destino.name)} 
                    value={indo} 
                    whenChanged={value => setIndo(value)}
                    icon={<SlPlane size={25} style = {{transform: 'rotateY(180deg)' }} />}
                />
                <InputField 
                    type="date"
                    label="Data da viagem de ida"
                    placeholder="Informe a data da viagem"
                    class="required"
                    value={dataIda}
                    id="dataIda"
                    disabled={false}
                    whenChanged={value => setDataIda(value)} 
                    icon={<AiTwotoneCalendar size={25} />}
                />
                <InputField 
                    type="date"
                    label="Data da viagem de volta"
                    placeholder="Informe a data de volta"
                    class="required"
                    value={dataVolta}
                    id="dataIda"
                    disabled={false}
                    whenChanged={value => setDataVolta(value)}
                    icon={<AiTwotoneCalendar size={25} />}
                />
                <InputField 
                    type="text"
                    label="Passageiros"
                    placeholder="Informe os passageiros"
                    class="required"
                    value={passegeiro}
                    id="passageiro"
                    disabled={true}
                    whenChanged={value => setPassageiro(value)}
                    icon={<SlPeople size={25} />}
                />
            </div>
        </fieldset>
    )

}

export default TripSelection;