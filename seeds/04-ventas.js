/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ventas').del()
  await knex('ventas').insert(
    [
      {
        "ventas_id": 1,
        "tiendas_id": 1,
        "clientes_id": 1,
        "fecha": "2023-11-01"
      },
      {
        "ventas_id": 2,
        "tiendas_id": 2,
        "clientes_id": 2,
        "fecha": "2023-11-02"
      },
      {
        "ventas_id": 3,
        "tiendas_id": 3,
        "clientes_id": 3,
        "fecha": "2023-11-03"
      },
      {
        "ventas_id": 4,
        "tiendas_id": 4,
        "clientes_id": 4,
        "fecha": "2023-11-04"
      },
      {
        "ventas_id": 5,
        "tiendas_id": 1,
        "clientes_id": 2,
        "fecha": "2023-11-05"
      },
      {
        "ventas_id": 6,
        "tiendas_id": 2,
        "clientes_id": 3,
        "fecha": "2023-11-06"
      },
      {
        "ventas_id": 7,
        "tiendas_id": 3,
        "clientes_id": 4,
        "fecha": "2023-11-07"
      },
      {
        "ventas_id": 8,
        "tiendas_id": 4,
        "clientes_id": 1,
        "fecha": "2023-11-08"
      },
      {
        "ventas_id": 9,
        "tiendas_id": 1,
        "clientes_id": 3,
        "fecha": "2023-11-09"
      },
      {
        "ventas_id": 10,
        "tiendas_id": 2,
        "clientes_id": 4,
        "fecha": "2023-11-10"
      }
    ]
    
  );
};
