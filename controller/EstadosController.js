const EstadosModel = require('../model/Estados')

//  Crear
const createEstado = (req, res) => {
  EstadosModel.createEstado(req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    })
}

//  Consultar
const getAllEstado = (req, res) => {
  EstadosModel.getAllEstado()
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrió un error,  ' + error })
    })
}
const getEstado = (req, res) => {
  EstadosModel.getEstado(req.params.id)
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrió un error,  ' + error })
    })
}

//  Actualizar
const putEstado = (req, res) => res.send({ message: 'Se actualizó el registro' })
const patchEstado = (req, res) => res.send({ message: 'Se actualizó el registro' })

//  Eliminar
const deleteEstado = (req, res) => res.send({ message: 'Se realizó la eliminación' })

module.exports = {
  createEstado,
  getAllEstado,
  getEstado,
  putEstado,
  patchEstado,
  deleteEstado
}
