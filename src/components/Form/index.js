import './Form.css';
import TripSelection from '../TripSelection';
import Button from '../Button';
import FlightSelection from '../FlightSelection';

function Form() {

    return (
        <div className="container">
            <h2>Com a GOL, você entra em 2023 voando! </h2>
            <form method="POST" id="flight-form" className="flight-form">
                
                <div className="steps clearfix">
                    <ul role="tablist">
                        <li role="tab" className="flight-form-step-li first" cod="1">
                            <a className="flight-form-step-a" href="#">
                                <span className="current-info audible"> </span>
                                <div className="title">
                                    <span className="number">1</span>
                                    <span className="title_text">Escolha a viagem</span>
                                </div>
                            </a>
                        </li>                    
                        <li role="tab" className="flight-form-step-li disabled" cod="2">
                            <a className="flight-form-step-a" href="#" >
                                <div className="title">
                                    <span className="number">2</span>
                                    <span className="title_text">Selecione o voo</span>
                                </div>
                            </a>
                        </li>
                        <li role="tab" className="flight-form-step-li disabled last" cod="3">
                            <a className="flight-form-step-a" href="#" >
                                <div className="title">
                                    <span className="number">3</span>
                                    <span className="title_text">Dados do passageiro</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>


                <div class="content clearfix">

                    <TripSelection />
                    <FlightSelection />

                    <fieldset id="flight-form-p-3" role="tabpanel" className="flight_fieldset_aba body current" cod="3" style={{display: 'none'}}>
                        A DESENVOLVER...
                    </fieldset>

                </div>

                <div className="fieldset-footer">
                    <span id="form-step-span" step="1">Step 1 of 3</span>                    
                    <Button 
                        type="button" 
                        label="Proximo" 
                        id="btnNext"
                        disabled={false}
                        background="#1ABC9C"
                        color="#FFF" 
                        display=""
                    />
                    <Button 
                        type="button"
                        label="Anterior" 
                        id="btnPrevious"
                        disabled={false}
                        background="#DEDEDE"
                        color="#646464"
                        display="none"  
                    />
                </div>

            </form>
        </div>
    )
}

export default Form;