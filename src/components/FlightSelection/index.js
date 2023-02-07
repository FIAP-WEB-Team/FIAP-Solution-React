import Radio from '../Radio';
import './FlightSelection.css';

const FlightSelection = (props) => {

    const flightList = [
    ]

    return (
        <fieldset id="flight-form-p-2" role="tabpanel" className="flight_fieldset_aba body current" cod="2" style={{ display: 'none' }}>
            <div className="card">
                <div className="card-title">Escolha seu voo</div>
                <div className="content-card">

                    {flightList.map(list =>
                        <Radio
                            id={list.id}
                            description={list.description}
                            hour={list.hour}
                        />
                    )}

                </div>
            </div>
        </fieldset>
    )
}

export default FlightSelection;