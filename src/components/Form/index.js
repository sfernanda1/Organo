import './Form.css';
import InputText  from '../InputText';
import Dropdown from '../Dropdown' ;
import Button from '../Button' ;
import { useState } from 'react'

const Form = (props) => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e gestão',
    ]


    const[name, setName] = useState('')
    const[role, setRole] = useState('')
    const[image, setImage] = useState('')
    const[squad, setSquad] = useState('')

    
    const saveValues = (event) => {
        event.preventDefault();
        props.addCollaborator({
            name,
            role,
            image,
            squad
        })
        console.log('Foi');
    }

    return(
        <section className='form-container'>
            <form onSubmit={saveValues}>
                <InputText value={name} required={true} label="Nome" placeholder="Digite seu nome" changing={value =>setName(value)}/>
                <InputText value={role} required={true} label="Cargo" placeholder="Digite seu cargo" changing={value =>setRole(value)}/>
                <InputText  value={image} label="Imagem" placeholder="Digite o endereço da imagem" changing={value =>setImage(value)}/>
                <Dropdown value={squad} changinh={value =>setSquad(value)} required={true} label="Time" items={times}/>
                <Button text="Criar Card" />
            </form>
        </section>
    )

}

export default Form