/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('servicios').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("servicios", function (table) {
                table.increments("id_servicio").primary();
                table.integer("id_usuario_ofrece_servicio");
                table.integer("id_habilidad_requerida");
                table.decimal("tarifa_por_hora").notNullable();
                table.timestamp("disponibilidad").defaultTo(knex.fn.now());
                table.string("ubicacion").notNullable();
                table.foreign("id_habilidad_requerida").references("habilidades.id_habilidad");
                table.foreign("id_usuario_ofrece_servicio").references("usuarios.id_usuario");
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
