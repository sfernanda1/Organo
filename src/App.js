import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react'
import Squad from './components/Squad';
import Footer from './components/Footer';

function App() {
  const squads =[
   {
    name:'Programação',
    colorSecundary:'#57C278',
    colorPrimary:'#D9F7E9',
   },
   {
    name:'Front-end',
    colorSecundary:'#82CFFA',
    colorPrimary:'#E8F8FF',
   },
   {
    name:'Data Science',
    colorSecundary:'#A6D157',
    colorPrimary:'#F0F8E2',
   } ,
   {
    name:'Devops',
    colorSecundary:'#E06B69',
    colorPrimary:'#FDE7E8',
   } ,
   {
    name:'Ux e Design',
    colorSecundary:'#DB6EBF',
    colorPrimary:'#FAE9F5',
   } ,
   {
    name:'Mobile',
    colorSecundary:'#FFBA05',
    colorPrimary:'#FFF5D9',
   } ,
   {
    name: 'Inovação e gestão',
    colorSecundary:'#FF8A29',
    colorPrimary:'#FFEEDF',
   } ,
  ]
  const [collaborators, setCollaborators] = useState([]);

  const addCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form squads={squads.map(squad => squad.name)} onRegisterCollaborator={collaborator => addCollaborator(collaborator)} />
      {squads.map(squad =>
         <Squad 
          key={squad.name}
          name={squad.name} 
          colorPrimary={squad.colorPrimary} 
          colorSecundary={squad.colorSecundary}
          collaborators={collaborators.filter(collaborator => collaborator.squad === squad.name)}
          />
        )}
      <Footer/>
    </div>
  );
}

export default App;
