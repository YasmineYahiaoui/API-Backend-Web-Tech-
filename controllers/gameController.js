const { Game } = require('../models/Game');

exports.createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: 'Error creating game', error });
  }
};

exports.getGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving games', error });
  }
};

exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findOne({ where: { id: req.params.id } });
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ message: 'Game not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving game', error });
  }
};

exports.updateGame = async (req, res) => {
  try {
    const [updated] = await Game.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedGame = await Game.findOne({ where: { id: req.params.id } });
      res.json(updatedGame);
    } else {
      res.status(404).json({ message: 'Game not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating game', error });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const deleted = await Game.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Game not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting game', error });
  }
};
