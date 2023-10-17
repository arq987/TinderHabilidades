const connection = require('../knexfile').development
const database = require('knex')(connection)

const createTrabajo = (trabajo) => {
  return database('trabajos')
    .insert(trabajo)
}

const getAllTrabajo = () => {
  return database.select('*').from('trabajos')
}

const getTrabajo = (trabajo) => {
  return database('trabajos').where({ id_trabajos: trabajo })
}

module.exports = {
  createTrabajo,
  getAllTrabajo,
  getTrabajo
}
