 
const db = require('../models');

const siteWebController = {
  createSiteWeb: async (req, res) => {
    try {
      const siteWeb = await db.SiteWeb.create(req.body);
      res.status(201).json(siteWeb);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getSiteWebs: async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    try {
      const siteWebs = await db.SiteWeb.findAndCountAll({ limit, offset });
      res.status(200).json({
        total: siteWebs.count,
        pages: Math.ceil(siteWebs.count / limit),
        data: siteWebs.rows,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getSiteWebById: async (req, res) => {
    try {
      const siteWeb = await db.SiteWeb.findByPk(req.params.id);
      if (!siteWeb) return res.status(404).json({ message: 'SiteWeb not found' });
      res.status(200).json(siteWeb);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  updateSiteWeb: async (req, res) => {
    try {
      const siteWeb = await db.SiteWeb.update(req.body, { where: { id: req.params.id } });
      if (!siteWeb[0]) return res.status(404).json({ message: 'SiteWeb not found' });
      res.status(200).json({ message: 'SiteWeb updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  deleteSiteWeb: async (req, res) => {
    try {
      const siteWeb = await db.SiteWeb.destroy({ where: { id: req.params.id } });
      if (!siteWeb) return res.status(404).json({ message: 'SiteWeb not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = siteWebController;
