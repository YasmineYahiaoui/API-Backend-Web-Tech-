// models/siteWeb.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SiteWeb = sequelize.define('SiteWeb', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'sitewebs',
  timestamps: true,
});

// Relation : Un site web appartient à un projet
SiteWeb.belongsTo(require('./Project'), { foreignKey: 'projectId' });

module.exports = SiteWeb;
