import { useEffect, useState } from "react";
import styles from './Passenger.css';


function Passenger(props) {
    const [CheckYES, setCheckYES] = useState(true);
    const [CheckNO, setCheckNO] = useState(false);
    const [dadosUserPadrao, setdadosUserPadrao] = useState({ firstName: 'Giba', secondName: 'Dos Santos', birthDate: '1997-10-11', nacionality: 'Brasileiro', gender: 'Masculino' });

    useEffect(() => {
        if (CheckYES === true) {
            setdadosUserPadrao({ firstName: 'Giba', secondName: 'Dos Santos', birthDate: '1997-10-11', nacionality: 'Brasileiro', gender: 'Masculino' });
            setCheckNO(false)
        }
        else {
            setdadosUserPadrao({ firstName: '', secondName: '', birthDate: '', nacionality: '', gender: '' });
            setCheckNO(true);
        }
    }, [CheckYES])

    return <fieldset id="flight-form-p-3" role="tabpanel" className="flight_fieldset_aba body current" cod="3" style={{ display: 'none' }}>
        <div className={styles.divForm}>
            <h2 className={styles.primaltitle}>Preencha os dados do Passageiro</h2>
            <h2 className={styles.secondtitle}> Giba, voce é o passageiro dessa viagem?</h2>
            <div className={styles.divcheck}>
                <label className={styles.primaltext}> sim</label>

                <label className={styles.checkboxstyle}>
                    <input type='checkbox' className={styles.primalcheckbox} defaultChecked={CheckYES} checked={CheckYES} onChange={() => setCheckYES(!CheckYES)}></input>
                </label>

                <label className={styles.secondtext}> não</label>
                <label className={styles.checkboxstyle}>
                    <input className={styles.secondcheckbox} type='checkbox' defaultChecked={CheckNO} checked={CheckNO} onChange={() => setCheckYES(!CheckYES)}></input>
                </label>

            </div>
        </div>
        <div >
            <form>
                <div className={styles.formsCorner}>
                    <p>PRIMEIRO NOME: </p>
                    <input type='text' placeholder="Digite seu nome Aqui" className={styles.inputstyle} name='tbFirstName' value={dadosUserPadrao.firstName} onChange={e => setdadosUserPadrao({ ...dadosUserPadrao, firstName: e.target.value })}></input>

                </div>
                <div className={styles.formsCorner}>
                    <p> SOBRENOME:</p>
                    <input type='text' placeholder="Digite seu Sobrenome Aqui" className={styles.inputstyle} name='tbLastName' value={dadosUserPadrao.secondName} onChange={e => setdadosUserPadrao({ ...dadosUserPadrao, secondName: e.target.value })}></input>
                </div>
                <div className={styles.formsCorner}>
                    <p> DATA DE NASCIMENTO:</p>
                    <input type='date' name='tbBirthName' className={styles.datepicker} placeholder='dd/mm/aaaa' value={dadosUserPadrao.birthDate} onChange={e => setdadosUserPadrao({ ...dadosUserPadrao, birthDate: e.target.value })}></input>
                </div>
                <div className={styles.formsCorner}>
                    <p> NACIONALIDADE:</p>
                    <input type='text' placeholder="Digite sua nacionalidade" className={styles.inputstyle} name='tbNacionality' value={dadosUserPadrao.nacionality} onChange={e => setdadosUserPadrao({ ...dadosUserPadrao, nacionality: e.target.value })}></input>
                </div>
                <div className={styles.formsCorner}>
                    <p> GÊNERO:</p>
                    <input type='text' placeholder="não é obrigatório" className={styles.inputstyle} name='tbGender' value={dadosUserPadrao.gender} onChange={e => setdadosUserPadrao({ ...dadosUserPadrao, gender: e.target.value })}></input>
                </div>
            </form>
        </div >
    </fieldset>
}

export default Passenger