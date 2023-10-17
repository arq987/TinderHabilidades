/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('usuarios').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('usuarios', function (table) {
        table.increments('id_usuario').primary()
        table.integer('id_persona')
        table.string('usuario').notNullable()
        table.string('contrasena').notNullable()
        table.string('correo_electronico').notNullable()
        table.integer('id_rol')
        table.boolean('estado').notNullable()
        table.foreign('id_persona').references('personas.id_persona')
        table.foreign('id_rol').references('roles.id_rol')
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
