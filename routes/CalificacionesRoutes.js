const express = require('express')
const router = express.Router()
const { CalificacionesController } = require('../controller')

// Crear
router.post('/', CalificacionesController.createCalificacion)

// Consultar todos
router.get('/', CalificacionesController.getAllCalificacion)

// Consultar por id
router.get('/:id', CalificacionesController.getCalificacion)

// Actualizar
router.put('/:id', CalificacionesController.putCalificacion)
router.patch('/:id', CalificacionesController.patchCalificacion)

// Eliminar
router.delete('/:id', CalificacionesController.deleteCalificacion)

module.exports = router
