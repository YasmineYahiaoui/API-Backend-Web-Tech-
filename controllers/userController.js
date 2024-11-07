const User = require('../models/User'); // Import du modèle

const userController = {
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.update(req.body, { where: { id: req.params.id } });
      if (!user[0]) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.destroy({ where: { id: req.params.id } });
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = userController;
