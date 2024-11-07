const { Role } = require('../models/Role');

exports.createRole = async (req, res) => {
  try {
    const role = await Role.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ message: 'Error creating role', error });
  }
};

exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving roles', error });
  }
};

exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findOne({ where: { id: req.params.id } });
    if (role) {
      res.json(role);
    } else {
      res.status(404).json({ message: 'Role not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving role', error });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const [updated] = await Role.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedRole = await Role.findOne({ where: { id: req.params.id } });
      res.json(updatedRole);
    } else {
      res.status(404).json({ message: 'Role not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating role', error });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const deleted = await Role.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Role not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting role', error });
  }
};
