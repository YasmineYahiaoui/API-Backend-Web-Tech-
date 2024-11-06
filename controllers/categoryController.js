 
const db = require('../models');

const categoryController = {
  createCategory: async (req, res) => {
    try {
      const category = await db.Category.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getCategories: async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    try {
      const categories = await db.Category.findAndCountAll({ limit, offset });
      res.status(200).json({
        total: categories.count,
        pages: Math.ceil(categories.count / limit),
        data: categories.rows,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getCategoryById: async (req, res) => {
    try {
      const category = await db.Category.findByPk(req.params.id);
      if (!category) return res.status(404).json({ message: 'Category not found' });
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  updateCategory: async (req, res) => {
    try {
      const category = await db.Category.update(req.body, { where: { id: req.params.id } });
      if (!category[0]) return res.status(404).json({ message: 'Category not found' });
      res.status(200).json({ message: 'Category updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  deleteCategory: async (req, res) => {
    try {
      const category = await db.Category.destroy({ where: { id: req.params.id } });
      if (!category) return res.status(404).json({ message: 'Category not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = categoryController;
