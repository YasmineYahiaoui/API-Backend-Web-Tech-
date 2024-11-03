const express = require('express');
const router = express.Router();
const gameController = require('./controllers/gameController');

// Créer un nouveau jeu
router.post('/', gameController.createGame);

// Récupérer tous les jeux avec pagination
router.get('/', gameController.getGames);

// Récupérer un jeu par ID
router.get('/:id', gameController.getGameById);

// Mettre à jour un jeu par ID
router.put('/:id', gameController.updateGame);

// Supprimer un jeu par ID
router.delete('/:id', gameController.deleteGame);

module.exports = router;

