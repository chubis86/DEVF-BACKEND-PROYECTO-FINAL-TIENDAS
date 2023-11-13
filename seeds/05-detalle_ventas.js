/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('detalle_ventas').del()
  await knex('detalle_ventas').insert(
    
    [
      {
        "cantidad": 3,
        "ventas_id": 1,
        "SKU": "SKU001"
      },
      {
        "cantidad": 2,
        "ventas_id": 2,
        "SKU": "SKU002"
      },
      {
        "cantidad": 5,
        "ventas_id": 3,
        "SKU": "SKU003"
      },
      {
        "cantidad": 1,
        "ventas_id": 4,
        "SKU": "SKU004"
      },
      {
        "cantidad": 4,
        "ventas_id": 5,
        "SKU": "SKU005"
      },
      {
        "cantidad": 2,
        "ventas_id": 6,
        "SKU": "SKU006"
      },
      {
        "cantidad": 3,
        "ventas_id": 7,
        "SKU": "SKU007"
      },
      {
        "cantidad": 1,
        "ventas_id": 8,
        "SKU": "SKU008"
      },
      {
        "cantidad": 2,
        "ventas_id": 9,
        "SKU": "SKU009"
      },
      {
        "cantidad": 3,
        "ventas_id": 10,
        "SKU": "SKU010"
      },
      {
        "cantidad": 2,
        "ventas_id": 1,
        "SKU": "SKU011"
      },
      {
        "cantidad": 4,
        "ventas_id": 2,
        "SKU": "SKU012"
      },
      {
        "cantidad": 1,
        "ventas_id": 3,
        "SKU": "SKU013"
      },
      {
        "cantidad": 3,
        "ventas_id": 4,
        "SKU": "SKU014"
      },
      {
        "cantidad": 2,
        "ventas_id": 5,
        "SKU": "SKU015"
      },
      {
        "cantidad": 1,
        "ventas_id": 6,
        "SKU": "SKU016"
      },
      {
        "cantidad": 3,
        "ventas_id": 7,
        "SKU": "SKU017"
      },
      {
        "cantidad": 2,
        "ventas_id": 8,
        "SKU": "SKU018"
      },
      {
        "cantidad": 4,
        "ventas_id": 9,
        "SKU": "SKU019"
      },
      {
        "cantidad": 1,
        "ventas_id": 10,
        "SKU": "SKU020"
      }
    ]
    
    
    );
};
