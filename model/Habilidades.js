const connection = require('../knexfile').development
const database = require('knex')(connection)

const createHabilidad = (habilidad) => {
  return database('habilidades')
    .insert(habilidad)
}

const getAllHabilidad = () => {
  return database.select('*').from('habilidades')
}

const getHabilidad = (habilidad) => {
  return database('habilidades').where({ id_habilidad: habilidad })
}

module.exports = {
  createHabilidad,
  getAllHabilidad,
  getHabilidad
}
