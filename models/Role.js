// models/role.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'roles',
  timestamps: true,
});

// Relation : Un rôle appartient à un utilisateur
Role.belongsTo(require('./user'), { foreignKey: 'userId' });

module.exports = Role;
