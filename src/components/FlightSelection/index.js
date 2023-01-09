import Radio from '../Radio';
import './FlightSelection.css';

const FlightSelection = (props) => {

    const flightList = [
        {
            id: '1',
            description: 'BRASIL -> JAPÃO',
            hour: '01/12 às 07:00'
        },
        {
            id: '2',
            description: 'ITALIA -> BRASIL',
            hour: '01/12 às 09:30'
        },
        {
            id: '3',
            description: 'JAPÃO -> ITALIA',
            hour: '01/12 às 12:15'
        },
        {
            id: '4',
            description: 'VOO A DECIDIR...',
            hour: '01/12 às 15:00'
        },
        {
            id: '5',
            description: 'VOO A DECIDIR...',
            hour: '01/12 às 21:00'
        }
    ]

    return (
        <fieldset id="flight-form-p-2" role="tabpanel" className="flight_fieldset_aba body current" cod="2" style={{display: 'none'}}>
            <div class="card">
                <div class="cart-title">Escolha seu voo</div>
                <div class="content-card">

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