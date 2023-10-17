/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('roles').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('roles', function (table) {
        table.increments('id_rol').primary()
        table.string('nombre_rol').notNullable()
        table.boolean('estado').notNullable()
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
