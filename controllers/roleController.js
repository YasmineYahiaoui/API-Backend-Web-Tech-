const db = require('../models');

const roleController = {
  createRole: async (req, res) => {
    try {
      const role = await db.Role.create(req.body);
      res.status(201).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getRoles: async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    try {
      const roles = await db.Role.findAndCountAll({ limit, offset });
      res.status(200).json({
        total: roles.count,
        pages: Math.ceil(roles.count / limit),
        data: roles.rows,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getRoleById: async (req, res) => {
    try {
      const role = await db.Role.findByPk(req.params.id);
      if (!role) return res.status(404).json({ message: 'Role not found' });
      res.status(200).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  updateRole: async (req, res) => {
    try {
      const role = await db.Role.update(req.body, { where: { id: req.params.id } });
      if (!role[0]) return res.status(404).json({ message: 'Role not found' });
      res.status(200).json({ message: 'Role updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  deleteRole: async (req, res) => {
    try {
      const role = await db.Role.destroy({ where: { id: req.params.id } });
      if (!role) return res.status(404).json({ message: 'Role not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = roleController;
 
