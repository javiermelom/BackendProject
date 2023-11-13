import express from "express";
import conexion from "./config/database.js";
import router from "./routes/rutas.js";
import cors from "cors";

const app = express();
const PORT = 3000;

async function iniciarServidor() {
  try {
    await conexion.sync({ force: false });
  } catch (error) {
    console.log(error.message);
    return;
  }
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(router);
  app.listen(PORT);
  console.log(`Servidor funcionando en el puerto ${ PORT }`);
}

iniciarServidor();
