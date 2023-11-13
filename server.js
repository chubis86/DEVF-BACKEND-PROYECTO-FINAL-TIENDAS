const express = require('express')
// Importar las rutas de mi vista (Home)
const productosRoute = require('./routes/productosRoute')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Routes */
app.use('/api/v1', productosRoute)

/* Levantar el servidor */
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
