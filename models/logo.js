const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Logo extends Model {}

Logo.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: { // URL de l'image du logo
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectId: { // Identifiant du projet auquel le logo est associé
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Projects', // Le modèle des projets
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Logo',
  tableName: 'logos',
  timestamps: true,
});

// Relations entre les modèles
Logo.associate = (models) => {
  Logo.belongsTo(models.Project, { foreignKey: 'projectId' }); // Un logo appartient à un projet
};

module.exports = Logo;
