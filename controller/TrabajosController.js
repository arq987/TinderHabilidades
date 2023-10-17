const TrabajoModel = require('../model/Trabajos')

// Crear
const createTrabajo = (req, res) => {
  TrabajoModel.createTrabajo(req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    })
}

// Consultar
const getAllTrabajo = (req, res) => {
  TrabajoModel.getAllTrabajo()
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrio un error,  ' + error })
    })
}
const getTrabajo = (req, res) => {
  TrabajoModel.getTrabajo(req.params.id)
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrio un error,  ' + error })
    })
}

// Actualizar
const putTrabajo = (req, res) => res.send({ message: 'Se actualizó el registro' })
const patchTrabajo = (req, res) => res.send({ message: 'Se actualizó el registro' })

// Eliminar
const deleteTrabajo = (req, res) => res.send({ message: 'Se realizó la eliminación' })

module.exports = {
  createTrabajo,
  getAllTrabajo,
  getTrabajo,
  putTrabajo,
  patchTrabajo,
  deleteTrabajo
}
