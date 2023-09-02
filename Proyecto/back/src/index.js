// const http = require("http");



// http
// .createServer ((req, res) => {
//     const {url} = req;            // /rickandmorty/character/1
//     res. setHeader ("Access-Control-Allow-Origin","*");
//     if (url.includes ("rickandmorty/character")) {
//     let urlId = url.split("/").pop(); // ["rickandmorty" , "character", "")
//     let found = characters. find(
//         (character) => character.id === Number (urlId)
//     );
//         res.writeHead(200, {"content-type":"application/json"});
//         res.end (JSON.stringify(found));
//     }
// }).listen(3001);


// const http = require("http");
// const { getCharById } = require("./controllers/getCharById"); // Ajusta la ruta según tu estructura de archivos

// http.createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//         const urlParts = req.url.split("/");
//         const id = parseInt(urlParts[urlParts.length - 1]);

//         if (!isNaN(id)) {
//             getCharById(res, id); // Utilizar el controlador aquí
//         } else {
//             res.writeHead(400, { "Content-Type": "text/plain" });
//             res.end("ID de personaje inválido");
//         }
//     } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("No encontrado");
//     }
// }).listen(3001);
const router = require('./routes/index'); 
const express = require('express');
const server = express();
const PORT = 3001;

// Middleware para configurar CORS
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
 });
 
 // Middleware para parsear el cuerpo de las solicitudes como JSON
 server.use(express.json());
 
 // Middleware para agregar "/rickandmorty" antes de las rutas
 server.use('/rickandmorty', router);
 
 // Puerto en el que se ejecutará el servidor
 const port = 3000;
 
 // Iniciar el servidor
 server.listen(port, () => {
   console.log(`Servidor en funcionamiento en el puerto ${port}`);
 });

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});