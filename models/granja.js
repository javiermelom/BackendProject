import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class granja extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idgranja: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    municipio: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    departamento: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    id_propietario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'propietario',
        key: 'idpropietario'
      }
    }
  }, {
    sequelize,
    tableName: 'granja',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "granja_pkey",
        unique: true,
        fields: [
          { name: "idgranja" },
        ]
      },
    ]
  });
  }
}
