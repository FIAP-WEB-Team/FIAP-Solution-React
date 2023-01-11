import './Button.css';

const Button = (props) => {
    const css = { background: props.background, color: props.color, display: props.display };

    return (
        <button type={props.type} className='button-custom' id={props.id} style={css} disabled={props.disabled}>{props.label}</button>
    )
}

export default Button;