const HabilidadesModel = require('../model/Habilidades')

//  Crear
const createHabilidad = (req, res) => {
  HabilidadesModel.createHabilidad(req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    })
}

//  Consultar
const getAllHabilidad = (req, res) => {
  HabilidadesModel.getAllHabilidad()
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrió un error,  ' + error })
    })
}
const getHabilidad = (req, res) => {
  HabilidadesModel.getHabilidad(req.params.id)
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrió un error,  ' + error })
    })
}

//  Actualizar
const putHabilidad = (req, res) => res.send({ message: 'Se actualizó el registro' })
const patchHabilidad = (req, res) => res.send({ message: 'Se actualizó el registro' })

//  Eliminar
const deleteHabilidad = (req, res) => res.send({ message: 'Se realizó la eliminación' })

module.exports = {
  createHabilidad,
  getAllHabilidad,
  getHabilidad,
  putHabilidad,
  patchHabilidad,
  deleteHabilidad
}
