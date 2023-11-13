/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('ventas').then(function (exists) {
      if (exists) {
        return knex.schema.table('ventas', function (table) {
          // Agregar una columna fk_user y que sea llave foranea
          // Haremos que una casa (homes) pueda pertenecer a un usuario (users)
          table.integer('tiendas_id').unsigned().references('tiendas.tiendas_id') // references() es una función de knex que nos permite hacer referencia a otra tabla y a su llave primaria
          table.integer('clientes_id').unsigned().references('clientes.clientes_id')  
        })
      }
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.hasTable('ventas').then(function (exists) {
      if (exists) {
        return knex.schema.table('ventas', function (table) {
          table.dropColumn('tiendas_id')
          table.dropColumn('clientes_id')
        })
      };
    })
  }