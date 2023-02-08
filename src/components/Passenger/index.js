import { useEffect, useState } from "react";
import InputField from "../InputField";
import './Passenger.css';


const DEFAULT_USER = { firstName: 'Giba', secondName: 'Dos Santos', birthDate: '1997-10-11', nationality: 'Brasileiro', gender: 'Masculino' }

function Passenger(props) {
    const [useDefaultUser, toggleDefaultUser] = useState(true);
    const [userData, setUserData] = useState(DEFAULT_USER);

    useEffect(() => {
        if (useDefaultUser) {
            setUserData(DEFAULT_USER);
        }
        else {
            setUserData({ firstName: '', secondName: '', birthDate: '', nationality: '', gender: '' });
        }
    }, [useDefaultUser])

    return <fieldset id="flight-form-p-3" role="tabpanel" className="flight_fieldset_aba body current" cod="3" style={{ display: 'none' }}>
        <div className="card">
            <div className="card-title">Preencha os dados do Passageiro</div>
            <div className="card-subtitle">Giba, voce é o passageiro dessa viagem?</div>
            <input type='checkbox' id='yesCheck'
                checked={useDefaultUser} onChange={() => toggleDefaultUser(!useDefaultUser)}></input>
            <label htmlFor='yesCheck'>Sim</label>
            <input type='checkbox' name="rd" id='noCheck'
                checked={!useDefaultUser} onChange={() => toggleDefaultUser(!useDefaultUser)}></input>
            <label htmlFor='noCheck'>Não</label>
        </div>
        <div className="fieldset-content">
            <InputField
                type="text"
                label="Primeiro Nome"
                placeholder="Digite seu nome aqui"
                class="required"
                id='tbFirstName'
                value={userData.firstName}
                whenChanged={value => setUserData({ ...userData, firstName: value })} />
            <InputField
                type="text"
                label="Sobrenome"
                placeholder="Digite seu sobrenome aqui"
                class="required"
                id='tbLastName'
                value={userData.secondName}
                whenChanged={value => setUserData({ ...userData, secondName: value })} />
            <InputField
                type="date"
                label="Data de nascimento"
                placeholder='dd/mm/aaaa'
                class="required"
                id='tbBirthDate'
                value={userData.birthDate}
                whenChanged={value => setUserData({ ...userData, birthDate: value })} />
            <InputField
                type="text"
                label="Nacionalidade"
                placeholder="Digite sua nacionalidade"
                class="required"
                id='tbNationality'
                value={userData.nationality}
                whenChanged={value => setUserData({ ...userData, nationality: value })} />
            <InputField
                type="text"
                label="Gênero"
                placeholder="Não é obrigatório"
                id='tbGender'
                value={userData.gender}
                whenChanged={value => setUserData({ ...userData, gender: value })} />
        </div>
    </fieldset>
}

export default Passenger