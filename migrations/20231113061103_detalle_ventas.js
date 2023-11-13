/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* EXPORTS UP
   Aqui colocaremos toda la lógica de la migración, es decir, la creación de la tabla, actualización de campos, etc.
*/
exports.up = function (knex) {
    return knex.schema.hasTable('detalle_ventas').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('detalle_ventas', function (table) {
            table.tinyint('cantidad').notNullable() // notNullable() quiere decir que no puede quedar vacio (nulo)
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
    return knex.schema.hasTable('detalle_ventas').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('detalle_ventas')
      }
    })
  }