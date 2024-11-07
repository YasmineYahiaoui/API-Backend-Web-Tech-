const { Logo } = require('../models/Logo');

exports.createLogo = async (req, res) => {
  try {
    const logo = await Logo.create(req.body);
    res.status(201).json(logo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating logo', error });
  }
};

exports.getLogos = async (req, res) => {
  try {
    const logos = await Logo.findAll();
    res.json(logos);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving logos', error });
  }
};

exports.getLogoById = async (req, res) => {
  try {
    const logo = await Logo.findOne({ where: { id: req.params.id } });
    if (logo) {
      res.json(logo);
    } else {
      res.status(404).json({ message: 'Logo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving logo', error });
  }
};

exports.updateLogo = async (req, res) => {
  try {
    const [updated] = await Logo.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedLogo = await Logo.findOne({ where: { id: req.params.id } });
      res.json(updatedLogo);
    } else {
      res.status(404).json({ message: 'Logo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating logo', error });
  }
};

exports.deleteLogo = async (req, res) => {
  try {
    const deleted = await Logo.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Logo not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting logo', error });
  }
};
