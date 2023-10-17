const connection = require('../knexfile').development
const database = require('knex')(connection)

const createServicio = (servicio) => {
  return database('servicios')
    .insert(servicio)
}

const getAllServicio = () => {
  return database.select('*').from('servicios')
}

const getServicio = (servicio) => {
  return database('servicios').where({ id_servicio: servicio })
}

module.exports = {
  createServicio,
  getAllServicio,
  getServicio
}
