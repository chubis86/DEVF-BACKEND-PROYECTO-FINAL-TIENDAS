/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clientes').del()
  await knex('clientes').insert(
    [
      {
        "clientes_id":"1",
        "nombre": "Juan",
        "apellido_paterno": "Gómez",
        "apellido_materno": "Pérez",
        "email": "juan.gomez@example.com",
        "telefono": "555-123-4567",
        "direccion": "Calle 123",
        "cp": "12345",
        "colonia": "Centro"
      },
      {
        "clientes_id":"2",
        "nombre": "María",
        "apellido_paterno": "Rodríguez",
        "apellido_materno": "Hernández",
        "email": "maria.rodriguez@example.com",
        "telefono": "555-234-5678",
        "direccion": "Avenida 456",
        "cp": "54321",
        "colonia": "Colonia Norte"
      },
      {
        "clientes_id":"3",
        "nombre": "Carlos",
        "apellido_paterno": "López",
        "apellido_materno": "García",
        "email": "carlos.lopez@example.com",
        "telefono": "555-345-6789",
        "direccion": "Calle Principal",
        "cp": "67890",
        "colonia": "Colonia Sur"
      },

      {
        "clientes_id":"4",
        "nombre": "Ana",
        "apellido_paterno": "Martínez",
        "apellido_materno": "Sánchez",
        "email": "ana.martinez@example.com",
        "telefono": "555-456-7890",
        "direccion": "Avenida Principal",
        "cp": "09876",
        "colonia": "Centro Histórico"
      }
    ]
    
  );
};
