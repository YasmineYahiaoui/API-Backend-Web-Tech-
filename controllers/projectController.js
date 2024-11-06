const db = require('../models');

const projectController = {
  createProject: async (req, res) => {
    try {
      const project = await db.Project.create(req.body);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getProjects: async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    try {
      const projects = await db.Project.findAndCountAll({ limit, offset });
      res.status(200).json({
        total: projects.count,
        pages: Math.ceil(projects.count / limit),
        data: projects.rows,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  getProjectById: async (req, res) => {
    try {
      const project = await db.Project.findByPk(req.params.id);
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.status(200).json(project);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  updateProject: async (req, res) => {
    try {
      const project = await db.Project.update(req.body, { where: { id: req.params.id } });
      if (!project[0]) return res.status(404).json({ message: 'Project not found' });
      res.status(200).json({ message: 'Project updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  
  deleteProject: async (req, res) => {
    try {
      const project = await db.Project.destroy({ where: { id: req.params.id } });
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = projectController;

