import './InputField.css'; 
// import { BiPlanet, CiPlane, SlPeople, GiRoad, AiTwotoneCalendar } from 'react-icons/ai'

const InputField = (props) => {

    const whenDigit = (event) => {
        props.whenChanged(event.target.value);
    }

    return (
        <div class="form-group">
            <label htmlFor={props.id} class="form-label">{props.label}</label>
            <input type={props.type} className={`${props.class}`} value={props.value} onChange={whenDigit} name={props.id} id={props.id} placeholder={props.placeholder} disabled={props.disabled} />
            {props.icon}
        </div> 
    )
}

export default InputField;