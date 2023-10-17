const ServicioModel = require('../model/Servicios')

// Crear
const createServicio = (req, res) => {
  ServicioModel.createServicio(req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    })
}

// Consultar
const getAllServicio = (req, res) => {
  ServicioModel.getAllServicio()
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrio un error,  ' + error })
    })
}
const getServicio = (req, res) => {
  ServicioModel.getServicio(req.params.id)
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrio un error,  ' + error })
    })
}

// Actualizar
const putServicio = (req, res) => res.send({ message: 'Se actualizó el registro' })
const patchServicio = (req, res) => res.send({ message: 'Se actualizó el registro' })

// Eliminar
const deleteServicio = (req, res) => res.send({ message: 'Se realizó la eliminación' })

module.exports = {
  createServicio,
  getAllServicio,
  getServicio,
  putServicio,
  patchServicio,
  deleteServicio
}
