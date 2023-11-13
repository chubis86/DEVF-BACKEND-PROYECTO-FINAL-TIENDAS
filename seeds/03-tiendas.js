/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tiendas').del()
  await knex('tiendas').insert(
    [
      {
        "tiendas_id": 1,
        "direccion": "Calle Comercial 123",
        "colonia": "Zona Comercial",
        "cp": "54321",
        "ciudad": "Ciudad A"
      },
      {
        "tiendas_id": 2,
        "direccion": "Avenida de la Tienda 456",
        "colonia": "Centro Comercial",
        "cp": "98765",
        "ciudad": "Ciudad B"
      },
      {
        "tiendas_id": 3,
        "direccion": "Boulevard de Compras 789",
        "colonia": "Área de Tiendas",
        "cp": "12345",
        "ciudad": "Ciudad C"
      },
      {
        "tiendas_id": 4,
        "direccion": "Plaza de la Tienda 101",
        "colonia": "Sector de Tiendas",
        "cp": "67890",
        "ciudad": "Ciudad D"
      },
      {
        "tiendas_id": 5,
        "direccion": "Calle de las Compras 202",
        "colonia": "Distrito de Tiendas",
        "cp": "34567",
        "ciudad": "Ciudad E"
      }
    ]
    
  );
};
