const { Sequelize } = require('sequelize');

// Remplacez 'database_name', 'username', et 'password' par vos informations
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost', // ou l'IP de votre serveur MySQL
  dialect: 'mysql',
  logging: false, // désactive le logging si vous ne voulez pas de détails sur les requêtes SQL
});

module.exports = sequelize;
