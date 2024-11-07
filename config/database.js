// config/database.js
const { Sequelize } = require('sequelize');

// Créez une instance de Sequelize pour SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',  // Le fichier SQLite sera créé dans le répertoire actuel
});

module.exports = sequelize;
