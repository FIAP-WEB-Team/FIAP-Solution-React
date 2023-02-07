const SelectOption = (props) => {
    return (
        <div className="form-select">
            <label htmlFor={props.id} className="form-label">{props.label}</label>
            <select onChange={event => props.whenChanged(event.target.value)} className={`${props.class}`} id={props.id} required={props.required} value={props.value}>
                {
                    props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })
                }
            </select>
            {props.icon}
        </div>
    )
}

export default SelectOption;