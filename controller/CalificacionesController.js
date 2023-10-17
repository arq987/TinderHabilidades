const CalificacionModel = require('../model/Calificaciones')

//  Crear
const createCalificacion = (req, res) => {
  CalificacionModel.createCalificacion(req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    })
}

//  Consultar
const getAllCalificacion = (req, res) => {
  CalificacionModel.getAllCalificacion()
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrio un error,  ' + error })
    })
}
const getCalificacion = (req, res) => {
  CalificacionModel.getAllCalificacion(req.params.id)
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrio un error,  ' + error })
    })
}

//  Actualizar
const putCalificacion = (req, res) => res.send({ message: 'Se actualizó el registro' })
const patchCalificacion = (req, res) => res.send({ message: 'Se actualizó el registro' })

//  Eliminar
const deleteCalificacion = (req, res) => res.send({ message: 'Se realizó la eliminación' })

module.exports = {
  createCalificacion,
  getAllCalificacion,
  getCalificacion,
  putCalificacion,
  patchCalificacion,
  deleteCalificacion
}
