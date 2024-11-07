const Category = require('../models/Category'); // Import du modèle

const categoryController = {
  createCategory: async (req, res) => {
    try {
      const category = await Category.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) return res.status(404).json({ message: 'Category not found' });
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const category = await Category.update(req.body, { where: { id: req.params.id } });
      if (!category[0]) return res.status(404).json({ message: 'Category not found' });
      res.status(200).json({ message: 'Category updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const category = await Category.destroy({ where: { id: req.params.id } });
      if (!category) return res.status(404).json({ message: 'Category not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = categoryController;
