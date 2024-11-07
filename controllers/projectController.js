const Project = require('../models/Project'); // Import du modèle

const projectController = {
  createProject: async (req, res) => {
    try {
      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getProjects: async (req, res) => {
    try {
      const projects = await Project.findAll();
      res.status(200).json(projects);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getProjectById: async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id);
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.status(200).json(project);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateProject: async (req, res) => {
    try {
      const project = await Project.update(req.body, { where: { id: req.params.id } });
      if (!project[0]) return res.status(404).json({ message: 'Project not found' });
      res.status(200).json({ message: 'Project updated successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteProject: async (req, res) => {
    try {
      const project = await Project.destroy({ where: { id: req.params.id } });
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = projectController;
