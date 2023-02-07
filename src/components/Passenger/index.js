import { useEffect, useState } from "react";
import InputField from "../InputField";


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
            <div className="card-title">Giba, voce é o passageiro dessa viagem?</div>
            <div>
                <label> Sim</label>
                <input type='checkbox'
                    checked={useDefaultUser} onChange={() => toggleDefaultUser(!useDefaultUser)}></input>
                <label> Não</label>
                <input type='checkbox' name="rd"
                    checked={!useDefaultUser} onChange={() => toggleDefaultUser(!useDefaultUser)}></input>

            </div>
        </div>
        <div className="fieldset-content">
            <InputField
                type="text"
                label="Primeiro Nome"
                placeholder="Digite seu nome aqui"
                className="required"
                id='tbFirstName'
                value={userData.firstName}
                whenChanged={value => setUserData({ ...userData, firstName: value })} />
            <InputField
                type="text"
                label="Sobrenome"
                placeholder="Digite seu sobrenome aqui"
                className="required"
                id='tbLastName'
                value={userData.secondName}
                whenChanged={value => setUserData({ ...userData, secondName: value })} />
            <InputField
                type="date"
                label="Data de nascimento"
                placeholder='dd/mm/aaaa'
                className="required"
                id='tbBirthDate'
                value={userData.birthDate}
                whenChanged={value => setUserData({ ...userData, birthDate: value })} />
            <InputField
                type="text"
                label="Nacionalidade"
                placeholder="Digite sua nacionalidade"
                className="required"
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