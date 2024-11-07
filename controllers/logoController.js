const Logo = require('../models/Logo'); // Import du modèle

const logoController = {
  createLogo: async (req, res) => {
    try {
      const logo = await Logo.create(req.body);
      res.status(201).json(logo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getLogos: async (req, res) => {
    try {
      const logos = await Logo.findAll();
      res.status(200).json(logos);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getLogoById: async (req, res) => {
    try {
      const logo = await Logo.findByPk(req.params.id);
      if (!logo) return res.status(404).json({ message: 'Logo not found' });
      res.status(200).json(logo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateLogo: async (req, res) => {
    try {
      const logo = await Logo.update(req.body, { where: { id: req.params.id } });
      if (!logo[0]) return res.status(404).json({ message: 'Logo not found' });
      res.status(200).json({ message: 'Logo updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteLogo: async (req, res) => {
    try {
      const logo = await Logo.destroy({ where: { id: req.params.id } });
      if (!logo) return res.status(404).json({ message: 'Logo not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = logoController;
