const express = require('express');
const gameController = require('../controllers/gameController');
const router = express.Router();

router.post('/games', gameController.createGame);
router.get('/games', gameController.getGames);
router.get('/games/:id', gameController.getGameById);
router.put('/games/:id', gameController.updateGame);
router.delete('/games/:id', gameController.deleteGame);

module.exports = router;
