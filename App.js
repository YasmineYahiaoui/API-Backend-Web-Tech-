const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController');
const logoController = require('./controllers/logoController');
const gameController = require('./controllers/gameController');
const categoryController = require('./controllers/categoryController');
const roleController = require('./controllers/roleController');
const siteWebController = require('./controllers/siteWebController');

// Utilisateurs
router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getUsers);
router.get('/api/users/:id', userController.getUserById);
router.put('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

// Projets
router.post('/api/projects', projectController.createProject);
router.get('/api/projects', projectController.getProjects);
router.get('/api/projects/:id', projectController.getProjectById);
router.put('/api/projects/:id', projectController.updateProject);
router.delete('/api/projects/:id', projectController.deleteProject);

// Logos
router.post('/api/logos', logoController.createLogo);
router.get('/api/logos', logoController.getLogos);
router.get('/api/logos/:id', logoController.getLogoById);
router.put('/api/logos/:id', logoController.updateLogo);
router.delete('/api/logos/:id', logoController.deleteLogo);

// Jeux
router.post('/api/games', gameController.createGame);
router.get('/api/games', gameController.getGames);
router.get('/api/games/:id', gameController.getGameById);
router.put('/api/games/:id', gameController.updateGame);
router.delete('/api/games/:id', gameController.deleteGame);

// Catégories
router.post('/api/categories', categoryController.createCategory);
router.get('/api/categories', categoryController.getCategories);
router.get('/api/categories/:id', categoryController.getCategoryById);
router.put('/api/categories/:id', categoryController.updateCategory);
router.delete('/api/categories/:id', categoryController.deleteCategory);

// Rôles
router.post('/api/roles', roleController.createRole);
router.get('/api/roles', roleController.getRoles);
router.get('/api/roles/:id', roleController.getRoleById);
router.put('/api/roles/:id', roleController.updateRole);
router.delete('/api/roles/:id', roleController.deleteRole);

// Sites web
router.post('/api/sitewebs', siteWebController.createSiteWeb);
router.get('/api/sitewebs', siteWebController.getSiteWebs);
router.get('/api/sitewebs/:id', siteWebController.getSiteWebById);
router.put('/api/sitewebs/:id', siteWebController.updateSiteWeb);
router.delete('/api/sitewebs/:id', siteWebController.deleteSiteWeb);

module.exports = router;

