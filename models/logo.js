// models/logo.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Logo = sequelize.define('Logo', {
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  altText: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'Logo',
  timestamps: true,
});

module.exports = Logo;
