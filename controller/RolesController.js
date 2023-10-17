const RolesModel = require('../model/Roles')

//  Crear
const createRol = (req, res) => {
  try {
    const respuesta = RolesModel.createRol(req.body)

    return res.status(201).send({ message: 'Rol creado con éxito', data: respuesta })
  } catch (error) {
    return res.status(500).send({ message: 'Error interno del servidor' })
  }
}

// Consultar
const getAllRol = (req, res) => {
  RolesModel.getAllRol()
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrió un error,  ' + error })
    })
}
const getRol = (req, res) => {
  RolesModel.getRol(req.params.id)
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrió un error,  ' + error })
    })
}

//  Actualizar
const putRol = (req, res) => res.send({ message: 'Se actualizó el registro' })
const patchRol = (req, res) => res.send({ message: 'Se actualizó el registro' })

//  Eliminar
const deleteRol = (req, res) => res.send({ message: 'Se realizó la eliminación' })

module.exports = {
  createRol,
  getAllRol,
  getRol,
  putRol,
  patchRol,
  deleteRol
}
