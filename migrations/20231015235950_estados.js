/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('estados').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("estados", function (table) {
                table.increments("id_estado").primary();
                table.string("nombre_estado").notNullable();
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
