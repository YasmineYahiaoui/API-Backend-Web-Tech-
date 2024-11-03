const db = require('../models'); // Assurez-vous que le chemin est correct

const userController = {
  createUser: async (req, res) => {
    try {
      const user = await db.User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getUsers: async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    try {
      const users = await db.User.findAndCountAll({ limit, offset });
      res.status(200).json({
        total: users.count,
        pages: Math.ceil(users.count / limit),
        data: users.rows,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getUserById: async (req, res) => {
    try {
      const user = await db.User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  updateUser: async (req, res) => {
    try {
      const user = await db.User.update(req.body, { where: { id: req.params.id } });
      if (!user[0]) return res.status(404).json({ message: 'User not found' });
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  deleteUser: async (req, res) => {
    try {
      const user = await db.User.destroy({ where: { id: req.params.id } });
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = userController;
