const express = require("express");
const router = express.Router();

const getCharByIdController = require("../controllers/getCharById");
const loginController = require("../controllers/login");
const handleFavoritesController = require("../controllers/handleFavorites");

router.get("/character/:id", getCharByIdController);
router.get("/login", loginController);
router.post("/fav", handleFavoritesController.postFav);
router.delete("/fav/:id", handleFavoritesController.deleteFav);

module.exports = router;