const express = require('express')
const router = express.Router()
const { EstadosController } = require('../controller')

// Crear
router.post('/', EstadosController.createEstado)

// Consultar todos
router.get('/', EstadosController.getAllEstado)

// Consultar por id
router.get('/:id', EstadosController.getEstado)

// Actualizar
router.put('/:id', (req, res) => res.send({ message: 'Se actualizó el registro' }))
router.patch('/:id', (req, res) => res.send({ message: 'Se actualizó la información' }))

// Eliminar
router.delete('/:id', (req, res) => res.send({ message: 'Se realizó la creación' }))

module.exports = router
