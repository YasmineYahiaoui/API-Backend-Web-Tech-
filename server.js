 
const express = require('express');
const bodyParser = require('body-parser');
const categoryController = require('../controllers/categoryController'); // Importer les routes de catégorie

const app = express();
app.use(bodyParser.json()); // Middleware pour parser le JSON

// Utiliser les routes de catégorie
app.use('/api/categories', categoryRoutes); // Toutes les routes de catégorie seront préfixées par '/api/categories'

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
