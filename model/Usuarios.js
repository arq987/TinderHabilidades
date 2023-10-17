const connection = require('../knexfile').development
const database = require('knex')(connection)

const createUsuario = (usuario) => {
  return database('usuarios')
    .insert(usuario)
}

const getAllUsuario = () => {
  return database.select('*').from('usuarios')
}

const getUsuario = (usuario) => {
  return database('usuarios').where({ id_usuarios: usuario })
}

module.exports = {
  createUsuario,
  getAllUsuario,
  getUsuario
}
