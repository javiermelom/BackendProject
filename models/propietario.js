import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class propietario extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idpropietario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_propietario: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "propietario_correo_key"
    },
    'contraseña': {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'propietario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "propietario_correo_key",
        unique: true,
        fields: [
          { name: "correo" },
        ]
      },
      {
        name: "propietario_pkey",
        unique: true,
        fields: [
          { name: "idpropietario" },
        ]
      },
    ]
  });
  }
}
