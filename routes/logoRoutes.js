 
const express = require('express');
const router = express.Router();
const logoController = require('./controllers/logoController');

// Créer un nouveau logo
router.post('/', logoController.createLogo);

// Récupérer tous les logos avec pagination
router.get('/', logoController.getLogos);

// Récupérer un logo par ID
router.get('/:id', logoController.getLogoById);

// Mettre à jour un logo par ID
router.put('/:id', logoController.updateLogo);

// Supprimer un logo par ID
router.delete('/:id', logoController.deleteLogo);

module.exports = router;
