 
const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

// Créer une nouvelle catégorie
router.post('/', categoryController.createCategory);

// Récupérer toutes les catégories avec pagination
router.get('/', categoryController.getCategories);

// Récupérer une catégorie par ID
router.get('/:id', categoryController.getCategoryById);

// Mettre à jour une catégorie par ID
router.put('/:id', categoryController.updateCategory);

// Supprimer une catégorie par ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
