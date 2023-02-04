import './Radio.css';

const Radio = (props) => {
    return (
        <div>
            <input type="radio" className="card-radio" name="rd" id={`radioList${props.id}`} value={props.id}/>                        
            <label htmlFor={`radioList${props.id}`} className={`box radioLabel${props.id}`} >
                <div className="plan">
                    <span className="circle"></span>
                    <span className="description">{props.description}</span>
                </div>
                <div className="sub-description">
                    <span className="price">&nbsp;&nbsp;R$ -&nbsp;&nbsp;</span><br />
                    <span className="date-departure">{props.hour}</span>
                </div>
            </label>
        </div>
    )
}

export default Radio;