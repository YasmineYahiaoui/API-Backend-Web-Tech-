 
const express = require('express');
const router = express.Router();
const roleController = require('./controllers/roleController');

// Créer un nouveau rôle
router.post('/', roleController.createRole);

// Récupérer tous les rôles avec pagination
router.get('/', roleController.getRoles);

// Récupérer un rôle par ID
router.get('/:id', roleController.getRoleById);

// Mettre à jour un rôle par ID
router.put('/:id', roleController.updateRole);

// Supprimer un rôle par ID
router.delete('/:id', roleController.deleteRole);

module.exports = router;
