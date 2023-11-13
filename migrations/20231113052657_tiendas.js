/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* EXPORTS UP
   Aqui colocaremos toda la lógica de la migración, es decir, la creación de la tabla, actualización de campos, etc.
*/
exports.up = function (knex) {
    return knex.schema.hasTable('tiendas').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('tiendas', function (table) {
          table.increments('tiendas_id').primary() // primary() quiere decir que es la llave primaria
          table.text('direccion').notNullable()
          table.string('cp').notNullable()
          table.string('colonia').notNullable()
          table.string('ciudad').notNullable()
          table.boolean('active').notNullable().defaultTo(true) // defaultTo() quiere decir un valor por defecto
        })
      }
    })
  }
  
  /**
     * @param { import("knex").Knex } knex
     * @returns { Promise<void> }
     */
  
  /*  EXPORTS.DOWN
        Aquí colocaremos la lógica para deshacer la migración, es decir, eliminar la tabla, eliminar campos, etc.
    */
  exports.down = function (knex) {
    return knex.schema.hasTable('tiendas').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('tiendas')
      }
    })
  }