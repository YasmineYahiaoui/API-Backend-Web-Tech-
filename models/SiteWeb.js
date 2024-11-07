const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class SiteWeb extends Model {}

SiteWeb.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectId: {  // Ajout du champ projectId
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Projects', // Assurez-vous que le modèle des projets est correct
      key: 'id'
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'SiteWeb',
  tableName: 'site_webs',
  timestamps: true,
});

module.exports = SiteWeb;
