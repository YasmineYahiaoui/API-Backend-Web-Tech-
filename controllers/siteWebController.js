const { SiteWeb } = require('../models/SiteWeb');

exports.createSiteWeb = async (req, res) => {
  try {
    const siteWeb = await SiteWeb.create(req.body);
    res.status(201).json(siteWeb);
  } catch (error) {
    res.status(500).json({ message: 'Error creating siteWeb', error });
  }
};

exports.getSiteWebs = async (req, res) => {
  try {
    const siteWebs = await SiteWeb.findAll();
    res.json(siteWebs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving siteWebs', error });
  }
};

exports.getSiteWebById = async (req, res) => {
  try {
    const siteWeb = await SiteWeb.findOne({ where: { id: req.params.id } });
    if (siteWeb) {
      res.json(siteWeb);
    } else {
      res.status(404).json({ message: 'SiteWeb not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving siteWeb', error });
  }
};

exports.updateSiteWeb = async (req, res) => {
  try {
    const [updated] = await SiteWeb.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedSiteWeb = await SiteWeb.findOne({ where: { id: req.params.id } });
      res.json(updatedSiteWeb);
    } else {
      res.status(404).json({ message: 'SiteWeb not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating siteWeb', error });
  }
};

exports.deleteSiteWeb = async (req, res) => {
  try {
    const deleted = await SiteWeb.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'SiteWeb not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting siteWeb', error });
  }
};
