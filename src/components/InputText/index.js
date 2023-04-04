
import './InputText.css'

const InputText = (props) =>{

    const onTyping = (event) => {
        props.changing = (event.target.value)
    }
    return(
        <div className="input-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyping} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
        </div>
    )
}

export default InputText;