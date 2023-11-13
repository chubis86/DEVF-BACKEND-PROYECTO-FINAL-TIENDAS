const modelProductos = require('../models/productos')
/* Los controladores tienen la logica de negocio */

const mostrarProducto = (req, res) => {
  
  modelProductos.mostrar(req.body)
    .then(row => {
      res.status(201).send({ message: 'Producto creado!!!'})
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creando porducto', err })
    })
}

/* const findAllHomes = (req, res) => {
    modelProductos.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing homes', err })
    })
}

const findOneHome = (req, res) => {
    modelProductos.findOne(req.params.idHome)
    .then(row => {
      res.status(200).send(row)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing home', err })
    })
}

const updateOneHome = (req, res) => {
    modelProductos.update(req.params.idHome, req.body)
    .then(row => {
      res.status(200).send({ message: 'Home Updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating home', err })
    })
}

const destroyOneHome = (req, res) => {
    modelProductos.destroy(req.params.idHome)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying home', err })
    })
}

const softDeleteOneHome = (req, res) => {
    modelProductos.softDelete(req.params.idHome)
    .then(row => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error deleting home', err })
    })
}
 */
module.exports = {
  mostrarProducto
}
