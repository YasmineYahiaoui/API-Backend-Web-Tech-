const express = require('express');
const sequelize = require('./database'); // Si vous utilisez SQLite
const gameRoutes = require('./routes/gameRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const logoRoutes = require('./routes/logoRoutes');
const projectRoutes = require('./routes/projectRoutes');
const roleRoutes = require('./routes/roleRoutes');
const siteWebRoutes = require('./routes/siteWebRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

// Utilisation des routes
app.use('/api', gameRoutes);
app.use('/api', categoryRoutes);
app.use('/api', logoRoutes);
app.use('/api', projectRoutes);
app.use('/api', roleRoutes);
app.use('/api', siteWebRoutes);
app.use('/api', userRoutes);

// Synchronisation de la base de données
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
