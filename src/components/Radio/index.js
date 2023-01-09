import './Radio.css';

const Radio = (props) => {
    return (
        <div>
            <input type="radio" className="card-radio" name="rd" id={`radioList${props.id}`} />                        
            <label htmlFor={`radioList${props.id}`} class={`box radioLabel${props.id}`} >
                <div class="plan">
                    <span class="circle"></span>
                    <span class="description">{props.description}</span>
                </div>
                    <span class="sub-description">{props.hour}</span>
            </label>
        </div>
    )
}

export default Radio;