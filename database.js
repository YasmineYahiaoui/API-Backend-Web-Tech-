const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('api_db', 'root', 'root123', {
  host: 'localhost',     // L'hôte est "localhost" si MySQL tourne sur votre machine
  dialect: 'mysql',      // Dialecte MySQL
  port: 3306,            // Port par défaut de MySQL
});

module.exports = sequelize;
