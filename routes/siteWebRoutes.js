 
const express = require('express');
const router = express.Router();
const siteWebController = require('./controllers/siteWebController');

// Créer un nouveau site web
router.post('/', siteWebController.createSiteWeb);

// Récupérer tous les sites web avec pagination
router.get('/', siteWebController.getSiteWebs);

// Récupérer un site web par ID
router.get('/:id', siteWebController.getSiteWebById);

// Mettre à jour un site web par ID
router.put('/:id', siteWebController.updateSiteWeb);

// Supprimer un site web par ID
router.delete('/:id', siteWebController.deleteSiteWeb);

module.exports = router;
