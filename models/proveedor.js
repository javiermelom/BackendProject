import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class proveedor extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idproveedor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "proveedor_correo_key"
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    marca_concentrado: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cant_concentradokg: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    precio_concentrado: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proveedor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "proveedor_correo_key",
        unique: true,
        fields: [
          { name: "correo" },
        ]
      },
      {
        name: "proveedor_pkey",
        unique: true,
        fields: [
          { name: "idproveedor" },
        ]
      },
    ]
  });
  }
}
