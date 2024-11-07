// models/project.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'projects',
  timestamps: true,
});

// Relation : Un projet peut avoir plusieurs jeux
Project.hasMany(require('./game'), { foreignKey: 'projectId' });

module.exports = Project;
