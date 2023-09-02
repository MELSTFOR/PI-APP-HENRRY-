
// const axios = require("axios");

// function getCharById(res, id) {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => {
//             const character = response.data;
//             const {
//                 gender,
//                 origin,
//                 species,
//                 name,
//                 image,
//                 status,
//                 id
//             } = character;

//             const simplifiedCharacter = {
//                 gender,
//                 origin,
//                 species,
//                 name,
//                 image,
//                 status,
//                 id
//             };

//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(JSON.stringify(simplifiedCharacter));
//         })
//         .catch(error => {
//             console.error("Error fetching character:", error);
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end("Error interno de servidor");
//         });
// }

// module.exports = { getCharById };

const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    const charId = req.params.id;

    try {
        const response = await axios.get(`${URL}${charId}`);
        const character = response.data;

        if (character.error) {
            res.status(404).json({ message: "Not found" });
        } else {
            const {
                id,
                status,
                name,
                species,
                origin,
                image,
                gender
            } = character;

            res.json({
                id,
                status,
                name,
                species,
                origin,
                image,
                gender
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getCharById;

