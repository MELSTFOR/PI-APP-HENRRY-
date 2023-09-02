import {Link} from 'react-router-dom';
import Detail from './detail';
import './Card.css';




export default function Card(props) {
   const {character,onClose}= props;
   


   return (
      <div className="fondocard">
         <button onClick={()=>{onClose(character.id)}}>X</button>
         <Link to={'/detail/${id}'} style={{textDecoration:'none'}}><h2>Nombre:{character.name}</h2></Link>
         <h2>Status:{character.status}</h2>
         <h2>Species:{character.species}</h2>
         <h2>Gender:{character.gender}</h2>
         <img src={character.image} alt={character.name}/> 
      </div>
   );
}
