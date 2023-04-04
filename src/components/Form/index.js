import './Form.css';
import InputText  from '../InputText';
const Form = () => {
    return(
        <section className='form-container'>
            <form>
                <InputText label="Nome" placeholder="Digite seu nome"/>
                <InputText label="Cargo" placeholder="Digite seu cargo"/>
                <InputText label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )

}

export default Form