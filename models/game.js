// models/Game.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Assurez-vous que le chemin est correct

const Game = sequelize.define('Game', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  releaseDate: {
    type: DataTypes.DATE,
  },
});

module.exports = Game;  // Exportation correcte du modèle
