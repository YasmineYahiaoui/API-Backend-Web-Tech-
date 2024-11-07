const express = require('express');
const siteWebController = require('../controllers/siteWebController');
const router = express.Router();

router.post('/siteWebs', siteWebController.createSiteWeb);
router.get('/siteWebs', siteWebController.getSiteWebs);
router.get('/siteWebs/:id', siteWebController.getSiteWebById);
router.put('/siteWebs/:id', siteWebController.updateSiteWeb);
router.delete('/siteWebs/:id', siteWebController.deleteSiteWeb);

module.exports = router;
