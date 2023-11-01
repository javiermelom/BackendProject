import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _caracteristicas_ganado from  "./caracteristicas_ganado.js";
import _distribucion from  "./distribucion.js";
import _ganado from  "./ganado.js";
import _granja from  "./granja.js";
import _propietario from  "./propietario.js";
import _proveedor from  "./proveedor.js";

export default function initModels(sequelize) {
  const caracteristicas_ganado = _caracteristicas_ganado.init(sequelize, DataTypes);
  const distribucion = _distribucion.init(sequelize, DataTypes);
  const ganado = _ganado.init(sequelize, DataTypes);
  const granja = _granja.init(sequelize, DataTypes);
  const propietario = _propietario.init(sequelize, DataTypes);
  const proveedor = _proveedor.init(sequelize, DataTypes);

  caracteristicas_ganado.belongsTo(ganado, { as: "id_ganado_ganado", foreignKey: "id_ganado"});
  ganado.hasMany(caracteristicas_ganado, { as: "caracteristicas_ganados", foreignKey: "id_ganado"});
  ganado.belongsTo(granja, { as: "id_granja_granja", foreignKey: "id_granja"});
  granja.hasMany(ganado, { as: "ganados", foreignKey: "id_granja"});
  distribucion.belongsTo(propietario, { as: "id_propietario_propietario", foreignKey: "id_propietario"});
  propietario.hasMany(distribucion, { as: "distribucions", foreignKey: "id_propietario"});
  granja.belongsTo(propietario, { as: "id_propietario_propietario", foreignKey: "id_propietario"});
  propietario.hasMany(granja, { as: "granjas", foreignKey: "id_propietario"});
  distribucion.belongsTo(proveedor, { as: "id_proveedor_proveedor", foreignKey: "id_proveedor"});
  proveedor.hasMany(distribucion, { as: "distribucions", foreignKey: "id_proveedor"});

  return {
    caracteristicas_ganado,
    distribucion,
    ganado,
    granja,
    propietario,
    proveedor,
  };
}
