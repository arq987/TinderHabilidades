const express = require('express');
const router = express.Router();
const { UsuariosController } = require('./controllers');

//Crear 
router.post('/', UsuariosController.createUsuario);

//Consultar todos
router.get('/', (req,res) => res.send({ message: "Se realizó la consulta"}));

//Consultar por id
router.get('/:id', (req,res) => res.send({ message: "Se realizó la consulta de un único registro"}));

//Actualizar
router.put('/:id', (req,res) => res.send({ message: "Se actualizó el registro"}));
router.patch('/:id', (req,res) => res.send({ message: "Se actualizó la información"}));

//Eliminar
router.delete('/:id', (req,res) => res.send({ message: "Se realizó la creación"}));

module.exports = router;