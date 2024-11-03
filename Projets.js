const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Project extends Model {}

Project.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: { // Remplacé 'name' par 'title'
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // Assurez-vous que le modèle des utilisateurs est correct
      key: 'id'
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories', // Assurez-vous que le modèle des catégories est correct
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Project',
  tableName: 'projects',
  timestamps: true,
});

// Relations
Project.associate = (models) => {
  Project.belongsTo(models.User, { foreignKey: 'userId' }); // Un projet appartient à un utilisateur
  Project.belongsTo(models.Category, { foreignKey: 'categoryId' }); // Un projet appartient à une catégorie
  Project.hasMany(models.SiteWeb, { foreignKey: 'projectId' }); // Un projet peut avoir plusieurs sites web
};

module.exports = Project;

