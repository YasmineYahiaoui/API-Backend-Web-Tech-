// models/category.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Category',
  timestamps: true, // Ajoute les champs createdAt et updatedAt automatiquement
});

module.exports = Category;
