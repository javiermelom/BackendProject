import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ganado extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idganado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    num_registro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "ganado_num_registro_key"
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    id_granja: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'granja',
        key: 'idgranja'
      }
    }
  }, {
    sequelize,
    tableName: 'ganado',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ganado_num_registro_key",
        unique: true,
        fields: [
          { name: "num_registro" },
        ]
      },
      {
        name: "ganado_pkey",
        unique: true,
        fields: [
          { name: "idganado" },
        ]
      },
    ]
  });
  }
}
