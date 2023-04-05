import './Form.css';
import InputText  from '../InputText';
import Dropdown from '../Dropdown' ;
import Button from '../Button' ;
import { useState } from 'react'

const Form = (props) => {
    const[name, setName] = useState('')
    const[role, setRole] = useState('')
    const[image, setImage] = useState('')
    const[squad, setSquad] = useState('')

    
    const saveValues = (event) => {
        event.preventDefault();
        props.onRegisterCollaborator({
            name,
            role,
            image,
            squad
        })
        setName('')
        setRole('')
        setImage('')
        setSquad('')
    }

    return(
        <section className='form-container'>
            <form onSubmit={saveValues}>
                <InputText value={name} required={true} label="Nome" placeholder="Digite seu nome" changing={value => setName(value)}/>
                <InputText value={role} required={true} label="Cargo" placeholder="Digite seu cargo" changing={value =>setRole(value)}/>
                <InputText  value={image} label="Imagem" placeholder="Digite o endereço da imagem" changing={value =>setImage(value)}/>
                <Dropdown value={squad} changing={value =>setSquad(value)} required={true} label="Time" items={props.squads}/>
                <Button>Criar card</Button>
            </form>
        </section>
    )

}

export default Form