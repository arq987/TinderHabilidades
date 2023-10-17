const express = require('express')
const router = express.Router()
const { ServiciosController } = require('../controller')

// Crear
router.post('/', ServiciosController.createServicio)

// Consultar todos
router.get('/', ServiciosController.getAllServicio)

// Consultar por id
router.get('/:id', ServiciosController.getServicio)

// Actualizar
router.put('/:id', (req, res) => res.send({ message: 'Se actualizó el registro' }))
router.patch('/:id', (req, res) => res.send({ message: 'Se actualizó la información' }))

// Eliminar
router.delete('/:id', (req, res) => res.send({ message: 'Se realizó la creación' }))

module.exports = router
