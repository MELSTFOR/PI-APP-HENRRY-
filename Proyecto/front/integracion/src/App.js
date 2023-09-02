import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/detail';
import Form from './components/Form';



// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };




function App() {
const [characters, setCharacters]= useState([]);


function searchHandler(id){
   // setCharacters([...characters,example])
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   


//esta funcion eleimina una card 
function closeHandler (id){
 let deleted = characters.filter((character)=>character.id !==Number(id));
 setCharacters(deleted);
}
   const location= useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'Nahuel07';


   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   
   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }
   useEffect(() => {
      if (!access) {
        navigate('/');
      }
    }, [access, navigate]);




   return (
      <div className='App'>
        <Nav onSearch = {searchHandler}/>
        {/* {location.pathname !=='/' && <Nav onSearch={onSearch}/>} */}
        <Routes>
        <Route path='/' element={<Form login ={login}/>}/>
         <Route path='/home' element={ <Cards characters={characters} onClose={closeHandler}/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>

        </Routes>
        
        

      </div>
   );
   

   }

export default App;
