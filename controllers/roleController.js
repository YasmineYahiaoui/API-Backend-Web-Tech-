const Role = require('../models/Role'); // Import du modèle

const roleController = {
  createRole: async (req, res) => {
    try {
      const role = await Role.create(req.body);
      res.status(201).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getRoles: async (req, res) => {
    try {
      const roles = await Role.findAll();
      res.status(200).json(roles);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getRoleById: async (req, res) => {
    try {
      const role = await Role.findByPk(req.params.id);
      if (!role) return res.status(404).json({ message: 'Role not found' });
      res.status(200).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateRole: async (req, res) => {
    try {
      const role = await Role.update(req.body, { where: { id: req.params.id } });
      if (!role[0]) return res.status(404).json({ message: 'Role not found' });
      res.status(200).json({ message: 'Role updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteRole: async (req, res) => {
    try {
      const role = await Role.destroy({ where: { id: req.params.id } });
      if (!role) return res.status(404).json({ message: 'Role not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = roleController;
