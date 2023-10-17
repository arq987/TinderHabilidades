const express = require('express')
const router = express.Router()
const { RolesController } = require('../controller')

// Crear
router.post('/', RolesController.createRol)

// Consultar todos
router.get('/', RolesController.getAllRol)

// Consultar por id
router.get('/:id', RolesController.getRol)

// Actualizar
router.put('/:id', (req, res) => res.send({ message: 'Se actualizó el registro' }))
router.patch('/:id', (req, res) => res.send({ message: 'Se actualizó la información' }))

// Eliminar
router.delete('/:id', (req, res) => res.send({ message: 'Se realizó la creación' }))

module.exports = router
