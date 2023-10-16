const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const createCalificacion = (calificacion) => {
    return database('calificaciones')
    .insert(calificacion);
};

const getAllCalificacion = () => {
    return database.select("*").from("calificaciones");
};

module.exports = {
    createCalificacion,
    getAllCalificacion
}
