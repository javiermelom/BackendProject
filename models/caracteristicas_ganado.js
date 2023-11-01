import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class caracteristicas_ganado extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    idcaracteristicas_ganado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    raza: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    pesokg: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    partos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'ordeño_mañanalts': {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    'ordeño_tardelts': {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    concentrado: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cant_concentradokg: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    'fecha_ordeño': {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_ganado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ganado',
        key: 'idganado'
      }
    }
  }, {
    sequelize,
    tableName: 'caracteristicas_ganado',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "caracteristicas_ganado_pkey",
        unique: true,
        fields: [
          { name: "idcaracteristicas_ganado" },
        ]
      },
    ]
  });
  }
}
