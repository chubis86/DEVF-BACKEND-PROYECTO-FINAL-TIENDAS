// Paso #1 Necesito traer la configuración del entorno de knex y los detalles de la conexión de la base de datos
const knex = require('../config')

const mostrar = () => {
  return knex
    .select('*')
    .from('productos')
    .where('activo', true) // Traemos los campos que no hayamos hecho un soft delete 
}

module.exports = {
    mostrar
  }

  
/*Otros ejemplos

// Paso #2 Es crear una función que traiga los datos que yo requiera de la base de datos
const create = (body) => {
  // Paso #3 Escribir la consulta de SQL usando Knex
  return knex
    .insert(body) // ¿Qué datos voy a insertar?
    .into('homes') // ¿En qué tabla?
    // .returning('*') // ¿Qué datos voy a retornar?
    .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true) // Traemos los campos que no hayamos hecho un soft delete
}

const findOne = (houseId) => {
  return knex
    .select(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
    .from('homes')
    .where('house_id', houseId)
    .where('active', true)
}

const update = (houseId, body) => {
  return knex
    .update(body)
    .from('homes')
    .where('house_id', houseId)
    .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}

// Voy a borrar de manera REAL un registro de la base de datos
const destroy = (houseId) => {
  return knex
    .del()
    .from('homes')
    .where('house_id', houseId)
}

// Borrado lógico, solo cambio active de true a false
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where('house_id', houseId)
}

// Paso #4 Exportar mis funciones para que sean accesibles desde el controlador
module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}

*/