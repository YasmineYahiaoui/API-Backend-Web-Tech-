const express = require('express');
const logoController = require('../controllers/logoController');
const router = express.Router();

router.post('/logos', logoController.createLogo);
router.get('/logos', logoController.getLogos);
router.get('/logos/:id', logoController.getLogoById);
router.put('/logos/:id', logoController.updateLogo);
router.delete('/logos/:id', logoController.deleteLogo);

module.exports = router;
