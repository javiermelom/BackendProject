import initModels from "../models/init-models.js";
import conexion from "../config/database.js";
const tablas = initModels(conexion);

///////////////////// PROPIETARIO ///////////////////////////


export async function propietario(req, res) {
  const id = req.params.id
  try {
    let consulta = await tablas.propietario.findOne({where: { idpropietario: id }})
    res.status(200).json(consulta);
  } catch (error) {
    res.status(401).json(consulta);
  }
}

export async function propietarios(req, res) {
  let consulta = await tablas.propietario.findAll();
  res.status(200).json(consulta);
}

export async function addpropietario(req, res) {
  console.log(req.body);
  try {
    let resultado = await tablas.propietario.create({
      nombre_propietario: req.body.nombre_propietario,
      celular: req.body.celular,
      correo: req.body.correo,
      contraseña: req.body.pass
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function deletepropietario(req, res) {
  try {
    let resultado = await tablas.propietario.destroy({
      where: { idpropietario: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}
///////////////////// GRANJA ///////////////////////////


export async function granja(req, res) {
  let consulta = await tablas.granja.findAll();
  res.json(consulta);
}

export async function addgranja(req, res) {
  try {
    let resultado = await tablas.granja.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

export async function deletegranja(req, res) {
  try {
    let resultado = await tablas.granja.destroy({
      where: { idgranja: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

export async function granjaPropietario(req, res) {
  const id = req.params.id;
  let consulta = await tablas.granja.findAll({where:{id_propietario:id}});
  res.json(consulta);
}

///////////////////// GANADO ///////////////////////////


export async function ganado(req, res) {
  let consulta = await tablas.ganado.findAll();
  res.json(consulta);
}

export async function addganado(req, res) {
  try {
    let resultado = await tablas.ganado.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

export async function deleteganado(req, res) {
  try {
    let resultado = await tablas.ganado.destroy({
      where: { idganado: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

export async function ganadoGranja(req, res) {
  const id = req.params.id;
  let consulta = await tablas.ganado.findAll({where:{id_granja:id}});
  res.json(consulta);
}

///////////////////// CARACTERISTICAS GANADO///////////////////////////


export async function caracteristicas_ganado(req, res) {
  let consulta = await tablas.caracteristicas_ganado.findAll();
  res.json(consulta);
}

export async function addcaracterisiticas_ganado(req, res) {
  try {
    let resultado = await tablas.caracteristicas_ganado.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

export async function deletecaracteristicas_ganado(req, res) {
  try {
    let resultado = await tablas.caracteristicas_ganado.destroy({
      where: { idcaracteristicas_ganado: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

export async function caracteristicasGanado(req, res) {
  const id = req.params.id;
  let consulta = await tablas.caracteristicas_ganado.findAll({where:{id_ganado:id}});
  res.json(consulta);
}

///////////////////// DISTRIBUCION ///////////////////////////


export async function distribucion(req, res) {
  let consulta = await tablas.distribucion.findAll();
  res.json(consulta);
}

export async function adddistribucion(req, res) {
  try {
    let resultado = await tablas.distribucion.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

export async function deletedistribucion(req, res) {
  try {
    let resultado = await tablas.distribucion.destroy({
      where: { iddistribucion: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

///////////////////// PROVEEDOR ///////////////////////////

export async function proveedor(req, res) {
  let consulta = await tablas.proveedor.findAll();
  res.json(consulta);
}

export async function addproveedor(req, res) {
  try {
    let resultado = await tablas.proveedor.create(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

export async function deleteproveedor(req, res) {
  try {
    let resultado = await tablas.proveedor.destroy({
      where: { idproveedor: req.params.id },
    });
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json("Error");
  }
}

// export async function proveedorPropietario(req, res) {
//   const id = req.params.id;
//   let consulta = await tablas.proveedor.findAll({where:{id_propietario:id}});
//   res.json(consulta);
// }

///////////////////// LOGIN ///////////////////////////

export async function login(req, res) {
  try {
    let correo = req.body.correo;
    let contraseña = req.body.contraseña;
    let usuario = await tablas.propietario.findOne({where:{ correo: correo }});
    if (usuario){
      if (contraseña === usuario.contraseña) {
        res.status(200).json(usuario);
        return;
      }
      else {
        res.status(500).json({ status: "Contraseña Incorrecta" });
      }
    }
    else{
      res.status(500).json({ status: "Usuario Incorrecto" });
    }
  } catch (error) {
    res.status(500).json("Error");
  }
}
