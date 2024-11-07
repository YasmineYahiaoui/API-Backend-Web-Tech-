const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Project extends Model {}

Project.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { // Nom du projet
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Project',
  tableName: 'projects',
  timestamps: true,
});

// Relations entre les modèles
Project.associate = (models) => {
  Project.hasMany(models.Game, { foreignKey: 'projectId' });
};

module.exports = Project;
