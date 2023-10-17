const UsuarioModel = require('../model/Usuarios')

// Crear
const createUsuario = (req, res) => {
  UsuarioModel.createUsuario(req.body)
    .then((respuesta) => {
      return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: error })
    })
}

// Consultar
const getAllUsuario = (req, res) => {
  UsuarioModel.getAllUsuario()
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrio un error,  ' + error })
    })
}
const getUsuario = (req, res) => {
  UsuarioModel.getUsuario(req.params.id)
    .then((respuesta) => {
      return res.status(200).send({ message: respuesta })
    })
    .catch((error) => {
      return res.status(500).send({ message: 'Ocurrio un error,  ' + error })
    })
}

// Actualizar
const putUsuario = (req, res) => res.send({ message: 'Se actualizó el registro' })
const patchUsuario = (req, res) => res.send({ message: 'Se actualizó el registro' })

// Eliminar
const deleteUsuario = (req, res) => res.send({ message: 'Se realizó la eliminación' })

module.exports = {
  createUsuario,
  getAllUsuario,
  getUsuario,
  putUsuario,
  patchUsuario,
  deleteUsuario
}
