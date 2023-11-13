/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('productos').del()
  await knex('productos').insert(

    [
      {
        "SKU": "SKU001",
        "nombre": "Camiseta Casual",
        "descripcion": "Camiseta de algodón con un diseño casual y cómodo.",
        "precio": 19.99
      },
      {
        "SKU": "SKU002",
        "nombre": "Zapatos Deportivos",
        "descripcion": "Zapatos deportivos ideales para correr y hacer ejercicio.",
        "precio": 29.99
      },
      {
        "SKU": "SKU003",
        "nombre": "Bolso Elegante",
        "descripcion": "Bolso elegante y espacioso para ocasiones especiales.",
        "precio": 39.99
      },
      {
        "SKU": "SKU004",
        "nombre": "Gafas de Sol",
        "descripcion": "Gafas de sol con protección UV y estilo moderno.",
        "precio": 49.99
      },
      {
        "SKU": "SKU005",
        "nombre": "Portátil Ultrabook",
        "descripcion": "Computadora portátil ultrabook con pantalla táctil.",
        "precio": 899.99
      },
      {
        "SKU": "SKU006",
        "nombre": "Teclado Mecánico",
        "descripcion": "Teclado mecánico para jugadores con retroiluminación LED.",
        "precio": 79.99
      },
      {
        "SKU": "SKU007",
        "nombre": "Cámara DSLR",
        "descripcion": "Cámara DSLR de alta resolución con lentes intercambiables.",
        "precio": 699.99
      },
      {
        "SKU": "SKU008",
        "nombre": "Smart TV 4K",
        "descripcion": "Televisor inteligente 4K con funciones de streaming integradas.",
        "precio": 599.99
      },
      {
        "SKU": "SKU009",
        "nombre": "Auriculares Inalámbricos",
        "descripcion": "Auriculares inalámbricos con cancelación de ruido.",
        "precio": 129.99
      },
      {
        "SKU": "SKU010",
        "nombre": "Tableta Gráfica",
        "descripcion": "Tableta gráfica para artistas digitales y diseñadores.",
        "precio": 149.99
      },
      {
        "SKU": "SKU011",
        "nombre": "Impresora Multifunción",
        "descripcion": "Impresora multifunción con escáner y copiadora.",
        "precio": 179.99
      },
      {
        "SKU": "SKU012",
        "nombre": "Mochila Resistente",
        "descripcion": "Mochila resistente y espaciosa para viajes y aventuras.",
        "precio": 59.99
      },
      {
        "SKU": "SKU013",
        "nombre": "Horno Microondas",
        "descripcion": "Horno microondas con funciones de cocción rápida.",
        "precio": 89.99
      },
      {
        "SKU": "SKU014",
        "nombre": "Set de Sartenes",
        "descripcion": "Set de sartenes antiadherentes para cocina gourmet.",
        "precio": 69.99
      },
      {
        "SKU": "SKU015",
        "nombre": "Caja de Herramientas",
        "descripcion": "Caja de herramientas completa para proyectos de bricolaje.",
        "precio": 129.99
      },
      {
        "SKU": "SKU016",
        "nombre": "Bicicleta de Montaña",
        "descripcion": "Bicicleta de montaña con cuadro de aluminio y suspensiones.",
        "precio": 499.99
      },
      {
        "SKU": "SKU017",
        "nombre": "Aspiradora Robot",
        "descripcion": "Aspiradora robot con tecnología de mapeo inteligente.",
        "precio": 249.99
      },
      {
        "SKU": "SKU018",
        "nombre": "Silla Ergonómica",
        "descripcion": "Silla ergonómica con ajustes para comodidad durante largas horas de trabajo.",
        "precio": 129.99
      },
      {
        "SKU": "SKU019",
        "nombre": "Lámpara de Pie",
        "descripcion": "Lámpara de pie moderna con regulador de intensidad.",
        "precio": 79.99
      },
      {
        "SKU": "SKU020",
        "nombre": "Cámara de Seguridad",
        "descripcion": "Cámara de seguridad con visión nocturna y detección de movimiento.",
        "precio": 129.99
      },
      {
        "SKU": "SKU021",
        "nombre": "Sistema de Sonido Envolvente",
        "descripcion": "Sistema de sonido envolvente para cine en casa.",
        "precio": 299.99
      },
      {
        "SKU": "SKU022",
        "nombre": "Máquina de Café Automática",
        "descripcion": "Máquina de café automática con molinillo integrado.",
        "precio": 149.99
      },
      {
        "SKU": "SKU023",
        "nombre": "Linterna Recargable",
        "descripcion": "Linterna recargable de alta potencia para actividades al aire libre.",
        "precio": 39.99
      },
      {
        "SKU": "SKU024",
        "nombre": "Almohadas de Memory Foam",
        "descripcion": "Almohadas con relleno de memory foam para un sueño confortable.",
        "precio": 49.99
      },
      {
        "SKU": "SKU025",
        "nombre": "Batería Externa",
        "descripcion": "Batería externa de gran capacidad para cargar dispositivos móviles.",
        "precio": 29.99
      },
      {
        "SKU": "SKU026",
        "nombre": "Kit de Pinceles de Maquillaje",
        "descripcion": "Kit completo de pinceles de maquillaje profesionales.",
        "precio": 19.99
      },
      {
        "SKU": "SKU027",
        "nombre": "Juego de Herramientas para Barbacoa",
        "descripcion": "Juego de herramientas premium para barbacoa.",
        "precio": 39.99
      },
      {
        "SKU": "SKU028",
        "nombre": "Cepillo Eléctrico para Dientes",
        "descripcion": "Cepillo eléctrico para dientes con tecnología de limpieza avanzada.",
        "precio": 59.99
      },
      {
        "SKU": "SKU029",
        "nombre": "Set de Toallas de Lujo",
        "descripcion": "Set de toallas de lujo de algodón egipcio.",
        "precio": 79.99
      },
      {
        "SKU": "SKU030",
        "nombre": "Reloj Inteligente",
        "descripcion": "Reloj inteligente con funciones avanzadas de seguimiento.",
        "precio": 49.99
      }
    ]
    

  );
};
