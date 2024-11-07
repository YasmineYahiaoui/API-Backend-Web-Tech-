const express = require('express');
const siteWebController = require('../controllers/siteWebController');
const router = express.Router();

router.post('/site-webs', siteWebController.createSiteWeb);
router.get('/site-webs', siteWebController.getSiteWebs);
router.get('/site-webs/:id', siteWebController.getSiteWebById);
router.put('/site-webs/:id', siteWebController.updateSiteWeb);
router.delete('/site-webs/:id', siteWebController.deleteSiteWeb);

module.exports = router;
