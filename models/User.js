const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Votre instance Sequelize

const User = sequelize.define('User', {
  // Définissez les attributs de l'utilisateur ici
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Association avec le modèle 'Project' (assurez-vous que ce modèle est défini correctement)
const Project = require('./project');  // Importer correctement le modèle Project

User.hasMany(Project, {
  foreignKey: 'userId',  // La clé étrangère dans Project
  as: 'projects', // Alias pour l'association
});

module.exports = User;
