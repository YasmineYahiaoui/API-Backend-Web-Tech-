const express = require('express');
const sequelize = require('./database');  // Connexion à la base de données MySQL
const gameRoutes = require('./routes/gameRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const logoRoutes = require('./routes/logoRoutes');
const projectRoutes = require('./routes/projectRoutes');
const roleRoutes = require('./routes/roleRoutes');
const siteWebRoutes = require('./routes/siteWebRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Utilisation des routes
app.use('/api', gameRoutes);
app.use('/api', categoryRoutes);
app.use('/api', logoRoutes);
app.use('/api', projectRoutes);
app.use('/api', roleRoutes);
app.use('/api', siteWebRoutes);
app.use('/api', userRoutes);

// Synchronisation de la base de données avec MySQL
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Démarrer le serveur
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
