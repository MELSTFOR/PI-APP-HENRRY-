import Card from './Card';
import {Link} from 'react-router-dom';
import './Cards.css';


export default function Cards(props) {
   const  {characters}= props;
   const {onClose}= props;
   return (
   <div className="home-background"> 
      {characters.map((character)=> (
         <Card key= {character.id} character={character} onClose={onClose} />

      ))}


   </div>
   );
}
