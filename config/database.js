import { Sequelize } from "sequelize";

// const conexion = new Sequelize(
//     'Farmaland',
//     'postgres',
//     '1234',
//     {
//         host: 'localhost',
//         port: 5432,
//         dialect: 'postgres'
//     }
// );
const conexion = new Sequelize(
    `postgres://postgres:f32eBCCAEAdGG*1eAEFc-bd2be16Gd2B@monorail.proxy.rlwy.net:17089/railway`, {
        logging: false, // cambiar a true para ver las query que se ejecutan desde la consola
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
      });


export default conexion;
