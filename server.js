const express = require('express');
const sequelize = require('./database');
const gameRoutes = require('./routes/gameRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const app = express();

app.use(express.json());

app.use('/api', gameRoutes);
app.use('/api', categoryRoutes);

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
