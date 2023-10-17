const connection = require('../knexfile').development
const database = require('knex')(connection)

const createCalificacion = (calificacion) => {
  return database('calificaciones')
    .insert(calificacion)
}

const getAllCalificacion = () => {
  return database.select('*').from('calificaciones')
}

const getCalificacion = (calificacion) => {
  return database('calificaciones').where({ id_calificacion: calificacion })
}

module.exports = {
  createCalificacion,
  getAllCalificacion,
  getCalificacion
}
