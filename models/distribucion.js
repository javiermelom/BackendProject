import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class distribucion extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    iddistribucion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_propietario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'propietario',
        key: 'idpropietario'
      }
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'proveedor',
        key: 'idproveedor'
      }
    }
  }, {
    sequelize,
    tableName: 'distribucion',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "distribucion_pkey",
        unique: true,
        fields: [
          { name: "iddistribucion" },
        ]
      },
    ]
  });
  }
}
