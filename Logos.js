const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Logo extends Model {}

Logo.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  projectId: { // Identifiant du projet auquel le logo est associé
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Projects', // Assurez-vous que le modèle des projets est correct
      key: 'id'
    }
  },
  logoUrl: { // URL du logo
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Logo',
  tableName: 'logos',
  timestamps: true,
});

// Relations
Logo.associate = (models) => {
  Logo.belongsTo(models.Project, { foreignKey: 'projectId' }); // Un logo appartient à un projet
};

module.exports = Logo;

