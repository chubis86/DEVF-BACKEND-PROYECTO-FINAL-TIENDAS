const express = require('express')
const router = express.Router()

const productosControlador = require('../controllers/productosController')

router.get('/productos', productosControlador.mostrarProducto)

module.exports = router
 