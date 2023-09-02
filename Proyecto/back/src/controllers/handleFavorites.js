let myFavorites = []; // No uses const para poder modificar el arreglo

const postFav = (req, res) => {
  const newFavorite = req.body;

  myFavorites.push(newFavorite);

  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const charId = parseInt(req.params.id);

  myFavorites = myFavorites.filter((character) => character.id !== charId);

  res.json(myFavorites);
};

module.exports = { postFav, deleteFav };