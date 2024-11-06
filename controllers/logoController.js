 
const db = require('../models');

const logoController = {
  createLogo: async (req, res) => {
    try {
      const logo = await db.Logo.create(req.body);
      res.status(201).json(logo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getLogos: async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    try {
      const logos = await db.Logo.findAndCountAll({ limit, offset });
      res.status(200).json({
        total: logos.count,
        pages: Math.ceil(logos.count / limit),
        data: logos.rows,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getLogoById: async (req, res) => {
    try {
      const logo = await db.Logo.findByPk(req.params.id);
      if (!logo) return res.status(404).json({ message: 'Logo not found' });
      res.status(200).json(logo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  updateLogo: async (req, res) => {
    try {
      const logo = await db.Logo.update(req.body, { where: { id: req.params.id } });
      if (!logo[0]) return res.status(404).json({ message: 'Logo not found' });
      res.status(200).json({ message: 'Logo updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  deleteLogo: async (req, res) => {
    try {
      const logo = await db.Logo.destroy({ where: { id: req.params.id } });
      if (!logo) return res.status(404).json({ message: 'Logo not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = logoController;
