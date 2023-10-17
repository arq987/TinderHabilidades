const connection = require('../knexfile').development
const database = require('knex')(connection)

const createPersona = (persona) => {
  return database('personas')
    .insert(persona)
}

const getAllPersona = () => {
  return database.select('*').from('personas')
}

const getPersona = (persona) => {
  return database('personas').where({ id_persona: persona })
}

module.exports = {
  createPersona,
  getAllPersona,
  getPersona
}
