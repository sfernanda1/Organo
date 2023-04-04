import './Form.css';
import InputText  from '../InputText';
import Dropdown from '../Dropdown' ;
import Button from '../Button' ;


const Form = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e gestão',
    ]

    const saveValues = (event) => {
        event.preventDefault();
        console.log('Foi');
    }

    return(
        <section className='form-container'>
            <form onSubmit={saveValues}>
                <InputText required={true} label="Nome" placeholder="Digite seu nome"/>
                <InputText required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <InputText label="Imagem" placeholder="Digite o endereço da imagem"/>
                <Dropdown required={true} label="Time" items={times}/>
                <Button text="Criar Card" />
            </form>
        </section>
    )

}

export default Form