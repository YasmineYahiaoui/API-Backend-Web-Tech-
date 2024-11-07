const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { // Nom de la catégorie
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Category',
  tableName: 'categories',
  timestamps: true,
});

module.exports = Category;
