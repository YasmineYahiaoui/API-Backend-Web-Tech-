const SiteWeb = require('../models/SitWeb'); // Import du modèle

const siteWebController = {
  createSiteWeb: async (req, res) => {
    try {
      const siteWeb = await SiteWeb.create(req.body);
      res.status(201).json(siteWeb);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getSiteWebs: async (req, res) => {
    try {
      const siteWebs = await SiteWeb.findAll();
      res.status(200).json(siteWebs);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getSiteWebById: async (req, res) => {
    try {
      const siteWeb = await SiteWeb.findByPk(req.params.id);
      if (!siteWeb) return res.status(404).json({ message: 'SiteWeb not found' });
      res.status(200).json(siteWeb);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateSiteWeb: async (req, res) => {
    try {
      const siteWeb = await SiteWeb.update(req.body, { where: { id: req.params.id } });
      if (!siteWeb[0]) return res.status(404).json({ message: 'SiteWeb not found' });
      res.status(200).json({ message: 'SiteWeb updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteSiteWeb: async (req, res) => {
    try {
      const siteWeb = await SiteWeb.destroy({ where: { id: req.params.id } });
      if (!siteWeb) return res.status(404).json({ message: 'SiteWeb not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = siteWebController;
