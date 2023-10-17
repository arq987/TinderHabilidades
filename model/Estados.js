const connection = require('../knexfile').development
const database = require('knex')(connection)

const createEstado = (estado) => {
  return database('estados')
    .insert(estado)
}

const getAllEstado = () => {
  return database.select('*').from('estados')
}

const getEstado = (estado) => {
  return database('estados').where({ id_estado: estado })
}

module.exports = {
  createEstado,
  getAllEstado,
  getEstado
}
