const PersonaModel = require('../model/Personas')

//  Crear
const createPersona = (req, res) => {
  PersonaModel.createPersona(req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    })
}

//  Consultar
const getAllPersona = (req, res) => {
  PersonaModel.getAllPersona()
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrió un error,  ' + error })
    })
}
const getPersona = (req, res) => {
  PersonaModel.getPersona(req.params.id)
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrió un error,  ' + error })
    })
}

//  Actualizar
const putPersona = (req, res) => res.send({ message: 'Se actualizó el registro' })
const patchPersona = (req, res) => res.send({ message: 'Se actualizó el registro' })

//  Eliminar
const deletePersona = (req, res) => res.send({ message: 'Se realizó la eliminación' })

module.exports = {
  createPersona,
  getAllPersona,
  getPersona,
  putPersona,
  patchPersona,
  deletePersona
}
