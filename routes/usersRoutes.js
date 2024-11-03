 
const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// Créer un nouvel utilisateur
router.post('/', userController.createUser);

// Récupérer tous les utilisateurs avec pagination
router.get('/', userController.getUsers);

// Récupérer un utilisateur par ID
router.get('/:id', userController.getUserById);

// Mettre à jour un utilisateur par ID
router.put('/:id', userController.updateUser);

// Supprimer un utilisateur par ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
