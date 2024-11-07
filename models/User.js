// models/user.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./Role');  // Associer à Role

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: true,
});

// Relation : Un utilisateur peut avoir plusieurs rôles
User.hasMany(Role, { foreignKey: 'userId' });

module.exports = User;
