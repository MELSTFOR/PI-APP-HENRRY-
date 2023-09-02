// import React from 'react';

// export default function Form() {
//   return (
//     <form>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
//ESTE ES EL ULTIMO CODIGO QUE HICIMOS =>>>>>>>>>>>>>>>>>>
// import React, { useState } from 'react';

// const validate = (userData, setErrors, errors) => {
//   if (!userData.email)  setErrors({...errors, email: "Email vacio"});
//   else{
//   if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(userData.email))
//   setErrors({...errors, email: ""});
//   else setErrors({ ...errors, email: "Email inválido" });
//   }

//  if (!userData.password)  setErrors({...errors, password: "Ingrese una constraseña."});
//  else{
//  if (/^(?=.*\d).{6,10}$/.test(userData.password))
//   setErrors({...errors, password: ""});
//    else setErrors({ ...errors, password: "Contraseña: Al menos un num, long : entre 6 y 10 caract. " });


//  }
 
// }



// export default function Form() {
//   const [userData, setUserData] = useState({
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});

//    const handleChange= (event) => {
//     const property= event.target.name;
//     const value= event.target.value;
   
//       setUserData({ ...userData, [property]: value });
//       validate ({...userData, [property]: value }, setErrors, errors);
  
  
// }

  

//   if (name === 'email') {
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       email: !validateEmail(value),
//     }));
//   } else if (name === 'password') {
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       password: !validatePassword(value),
//     }));
//   }
  

//   return (
//     <form>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={userData.email}
//           onChange={handleChange}
//         />
//         <span>{errors.email}</span>
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={userData.password}
//           onChange={handleChange}
        
//         />

//  <span>{errors.password}</span> 

//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }



// import React, { useState } from 'react';

// const validate = (userData) => {
//   const errors = {};
//   if (!userData.email) errors.email = "Email vacío";
//   else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(userData.email))
//     errors.email = "Email inválido";

//   if (!userData.password) errors.password = "Ingrese una contraseña.";
//   else if (!/^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,10}$/.test(userData.password))
//     errors.password = "Contraseña inválida";

//   return errors;
// };

// export default function Form() {
//   const [userData, setUserData] = useState({
//     email: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//     const newErrors = validate({ ...userData, [name]: value });
//     setErrors(newErrors);
//   };

//   return (
//     <form>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={userData.email}
//           onChange={handleChange}
//         />
//         <span>{errors.email}</span>
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={userData.password}
//           onChange={handleChange}
//         />
//         <span>{errors.password}</span>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// ESTE ES EL ULTIMMO CODIGO QUE REALICE (al clickear en cada input solo renderiza los mensajes correspondientes a los campos pedidos )
import React, { useState } from 'react';

// Función de validación para el email
const validateEmail = (email) => {
  if (!email) return "Email vacio";
  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) return "";
  return "Email inválido";
};

// Función de validación para la contraseña
const validatePassword = (password) => {
  if (!password) return "Ingrese una contraseña.";
  if (/^(?=.*\d).{6,10}$/.test(password)) return "";
  return "Contraseña: Al menos un número, longitud entre 6 y 10 caracteres.";
};

export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    if (name === 'email') {
      setErrors({ ...errors, email: validateEmail(value) });
    } else if (name === 'password') {
      setErrors({ ...errors, password: validatePassword(value) });
    }
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailError = validateEmail(userData.email);
    const passwordError = validatePassword(userData.password);
    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
    } else {
      login(userData);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <span>{errors.email}</span>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder='Contraseña'
        />
        <span>{errors.password}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
// SALIOOOOOOOOOOOOOOOOOOOOOOO