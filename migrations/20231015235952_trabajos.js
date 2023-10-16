/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('trabajos').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("trabajos", function (table) {
                table.increments("id_trabajo").primary();
                table.integer("id_usuario_contrata");
                table.integer("id_usuario_ofrece_servicio");
                table.integer("duracion_trabajo").notNullable();
                table.timestamp("fecha_inicio");
                table.string("estado_trabajo").notNullable();
                table.integer("id_estado").notNullable();
                table.foreign("id_usuario_contrata").references("usuarios.id_usuario");
                table.foreign("id_usuario_ofrece_servicio").references("usuarios.id_usuario");
                table.foreign("id_estado").references("estados.id_estado");
            })
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
