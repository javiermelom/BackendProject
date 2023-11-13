import { Router } from "express";
import { propietarios, propietario, granja, ganado, caracteristicas_ganado, distribucion, proveedor,
    addpropietario, addgranja, addganado, addcaracterisiticas_ganado, adddistribucion, addproveedor,
    deletepropietario, deletegranja, deleteganado, deletecaracteristicas_ganado, deletedistribucion, deleteproveedor,
    login } 
    from "../controllers/controllers.js";
// import initModels from "../models/init-models.js";

const router = Router();

router.get("/consultaPropietarios", propietarios);
router.get("/consultaPropietario/:id", propietario);
router.get("/consultaGranja", granja);
router.get("/consultaGanado", ganado);
router.get("/consultaCaracteristicas_ganado", caracteristicas_ganado);
router.get("/consultaDistribucion", distribucion);
router.get("/consultaProveedor", proveedor);
router.post("/agregarPropietario", addpropietario);
router.post("/agregarGranja", addgranja);
router.post("/agregarGanado", addganado);
router.post("/agregarCaracteristicas_ganado", addcaracterisiticas_ganado);
router.post("/agregarDistribucion", adddistribucion);
router.post("/agregarProveedor", addproveedor);
router.delete("/borrarPropietario/:id", deletepropietario);
router.delete("/borrarGranja/:id", deletegranja);
router.delete("/borrarGanado/:id", deleteganado);
router.delete("/borrarCaracteristicas_ganado/:id", deletecaracteristicas_ganado);
router.delete("/borrarDistribuicion/:id", deletedistribucion);
router.delete("/borrarProveedor/:id", deleteproveedor);
router.post("/loginUsuario", login);


export default router;
