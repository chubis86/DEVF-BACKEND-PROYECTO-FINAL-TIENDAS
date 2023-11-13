/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* EXPORTS UP
   Aqui colocaremos toda la lógica de la migración, es decir, la creación de la tabla, actualización de campos, etc.
*/
exports.up = function (knex) {
    return knex.schema.hasTable('clentes').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('clientes', function (table) {
          table.increments('clientes_id').primary() // primary() quiere decir que es la llave primaria
          table.string('nombre').notNullable() // notNullable() quiere decir que no puede quedar vacio (nulo)
          table.string('apellido_paterno')
          table.string('apellido_materno')
          table.string('email')
          table.string('telefono')
          table.text('direccion')
          table.string('cp')
          table.string('colonia')
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
    return knex.schema.hasTable('clientes').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('clientes')
      }
    })
  }
  /* GUIA DE USO RÁPIDO DE KNEX */
  
  // ** CREAR UNA MIGRACIÓN **
  // knex migrate:make nombre_de_la_migracion
  // Esto crea una carpeta llamada migrations en la raíz del proyecto y dentro de ella un archivo con el nombre de la migración que le dimos como parámetro.
  
  // ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.UP() **
  // Al ejecutar una migración sobre exports.up() estamos creando o modificando una tabla en la base de datos.
  // Ejecutar la última migración (up): knex migrate:latest
  // Ejecutar todas las migraciones (up): knex migrate:up
  // Ejecutar una migración específica (up): knex migrate:up nombre_de_la_migracion.js
  
  // ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.DOWN() **
  // Al ejecutar una migración sobre exports.down() estamos eliminando o modificando una tabla en la base de datos.
  // Ejecutar la última migración (down): knex migrate:rollback
  // Ejecutar todas las migraciones (down): knex migrate:down
  // Ejecutar una migración específica (down): knex migrate:down nombre_de_la_migracion.js
  