 
const db = require('../models');

const gameController = {
  createGame: async (req, res) => {
    try {
      const game = await db.Game.create(req.body);
      res.status(201).json(game);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getGames: async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    try {
      const games = await db.Game.findAndCountAll({ limit, offset });
      res.status(200).json({
        total: games.count,
        pages: Math.ceil(games.count / limit),
        data: games.rows,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getGameById: async (req, res) => {
    try {
      const game = await db.Game.findByPk(req.params.id);
      if (!game) return res.status(404).json({ message: 'Game not found' });
      res.status(200).json(game);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  updateGame: async (req, res) => {
    try {
      const game = await db.Game.update(req.body, { where: { id: req.params.id } });
      if (!game[0]) return res.status(404).json({ message: 'Game not found' });
      res.status(200).json({ message: 'Game updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  deleteGame: async (req, res) => {
    try {
      const game = await db.Game.destroy({ where: { id: req.params.id } });
      if (!game) return res.status(404).json({ message: 'Game not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = gameController;
