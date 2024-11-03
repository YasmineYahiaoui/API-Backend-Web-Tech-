 
const express = require('express');
const router = express.Router();
const projectController = require('./controllers/projectController');

// Créer un nouveau projet
router.post('/', projectController.createProject);

// Récupérer tous les projets avec pagination
router.get('/', projectController.getProjects);

// Récupérer un projet par ID
router.get('/:id', projectController.getProjectById);

// Mettre à jour un projet par ID
router.put('/:id', projectController.updateProject);

// Supprimer un projet par ID
router.delete('/:id', projectController.deleteProject);

module.exports = router;
