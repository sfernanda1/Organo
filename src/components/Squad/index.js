import './Squad.css'
import Collaborator from '../Collaborator'
const Squad = (props) => {
    return (
        (props.collaborators.length > 0) && 
        <section style={{backgroundColor: props.colorPrimary}} className="squad">
            <h3 style={{borderColor: props.colorSecundary}}>{props.name}</h3>
            <div className='collaborators'>
                {
                props.collaborators.map(collaborator => <Collaborator name={collaborator.name} role={collaborator.role} image={collaborator.image} />)
                }
            </div>
        </section>
    )
}

export default Squad;