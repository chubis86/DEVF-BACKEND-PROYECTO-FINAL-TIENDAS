/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('detalle_ventas').then(function (exists) {
      if (exists) {
        return knex.schema.table('detalle_ventas', function (table) {
          // Agregar una columna fk_user y que sea llave foranea
          // Haremos que una casa (homes) pueda pertenecer a un usuario (users)
          table.integer('ventas_id').unsigned().references('ventas.ventas_id') // references() es una función de knex que nos permite hacer referencia a otra tabla y a su llave primaria
          table.string('SKU').unsigned().references('productos.SKU')  
        })
      }
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.hasTable('detalle_ventas').then(function (exists) {
      if (exists) {
        return knex.schema.table('detalle_ventas', function (table) {
          table.dropColumn('ventas_id')
          table.dropColumn('SKU')
        })
      };
    })
  }