const express = require('express');
const {
    addFavorite, 
    getAllFavorite, 
    getFavorite,
    updateFavorite,
    deleteFavorite,
    deleteAllFavorites,

} = require('../controllers/favoriteController')

const router = express.Router();


router.post('/favorite', addFavorite);
router.get("/favorites", getAllFavorite);
router.get("/favorite/:id", getFavorite);
router.put("/favorite/:id", updateFavorite)
router.delete("/favorite/:id", deleteFavorite)
router.delete("/favorite/", deleteAllFavorites)

module.exports = {
    routes: router
}