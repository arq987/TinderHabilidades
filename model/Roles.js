const connection = require('../knexfile').development
const database = require('knex')(connection)

const createRol = (rol) => {
  return database('roles')
    .insert(rol)
}

const getAllRol = () => {
  return database.select('*').from('roles')
}

const getRol = (rol) => {
  return database('roles').where({ id_rol: rol })
}

module.exports = {
  createRol,
  getAllRol,
  getRol
}
