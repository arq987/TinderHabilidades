const express = require('express')
const router = express.Router()
const { TrabajosController } = require('../controller')

// Crear
router.post('/', TrabajosController.createTrabajo)

// Consultar todos
router.get('/', TrabajosController.getAllTrabajo)

// Consultar por id
router.get('/:id', TrabajosController.getTrabajo)

// Actualizar
router.put('/:id', (req, res) => res.send({ message: 'Se actualizó el registro' }))
router.patch('/:id', (req, res) => res.send({ message: 'Se actualizó la información' }))

// Eliminar
router.delete('/:id', (req, res) => res.send({ message: 'Se realizó la creación' }))

module.exports = router
