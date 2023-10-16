/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('calificaciones').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("calificaciones", function (table) {
                table.increments("id_calificacion").primary();
                table.integer("id_usuario_recibe_calificacion");
                table.integer("id_usuario_otorga_calificacion");
                table.integer("puntuacion").notNullable();
                table.string("comentario").notNullable();
                table.foreign("id_usuario_recibe_calificacion").references("usuarios.id_usuario");
                table.foreign("id_usuario_otorga_calificacion").references("usuarios.id_usuario");
            })
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
