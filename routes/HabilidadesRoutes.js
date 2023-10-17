const express = require('express')
const router = express.Router()
const { HabilidadesController } = require('../controller')

// Crear
router.post('/', HabilidadesController.createHabilidad)

// Consultar todos
router.get('/', HabilidadesController.getAllHabilidad)

// Consultar por id
router.get('/:id', HabilidadesController.getHabilidad)

// Actualizar
router.put('/:id', (req, res) => res.send({ message: 'Se actualizó el registro' }))
router.patch('/:id', (req, res) => res.send({ message: 'Se actualizó la información' }))

// Eliminar
router.delete('/:id', (req, res) => res.send({ message: 'Se realizó la creación' }))

module.exports = router
