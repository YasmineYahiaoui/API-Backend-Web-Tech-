const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Game extends Model {}

Game.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: { // Titre du jeu
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: { // Description du jeu
    type: DataTypes.TEXT,
    allowNull: true,
  },
  projectId: { // Identifiant du projet auquel le jeu est associé
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Projects', // Assurez-vous que le modèle des projets est correct
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Game',
  tableName: 'games',
  timestamps: true,
});

// Relations
Game.associate = (models) => {
  Game.belongsTo(models.Project, { foreignKey: 'projectId' }); // Un jeu appartient à un projet
};

module.exports = Game;

