/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('personas').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("personas", function (table) {
                table.increments("id_persona").primary();
                table.string("nombre_completo").notNullable();
                table.string("apellido_completo").notNullable();
                table.string("direccion").notNullable();
                table.integer("telefono").notNullable();
                table.boolean("estado").notNullable();
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
