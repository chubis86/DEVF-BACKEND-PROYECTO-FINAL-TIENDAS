// Paso #1 Necesito traer la configuración del entorno de knex y los detalles de la conexión de la base de datos
const knex = require('../config')

// Paso #2 Es crear una función que traiga los datos que yo requiera de la base de datos
const mostrar = (body) => {
  // Paso #3 Escribir la consulta de SQL usando Knex
  return knex
    .insert(body) // ¿Qué datos voy a insertar?
    .into('productos') // ¿En qué tabla?
    // .returning('*') // ¿Qué datos voy a retornar?
    .returning(['SKU', 'nombre', 'descripcion', 'precio'])
}

module.exports = {
    mostrar
  }
  