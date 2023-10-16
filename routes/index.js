const express = require('express');
const router = express.Router();

const CalificacionesRoutes = require('./CalificacionesRoutes');
const EstadosRoutes = require('./EstadosRoutes');
const HabilidadesRoutes = require('./HabilidadesRoutes');
const PersonaRoutes = require('./PersonasRoutes');
const RolesRoutes = require('./RolesRoutes');
const ServiciosRoutes = require('./ServiciosRoutes');
const TrabajosRoutes = require('./TrabajosRoutes');
const UsuariosRoutes = require('./UsuariosRoutes');

router.use('/calificaciones', CalificacionesRoutes);
router.use('/estados', EstadosRoutes);
router.use('/habilidades', HabilidadesRoutes);
router.use('/personas', PersonaRoutes);
router.use('/roles', RolesRoutes);
router.use('/servicios', ServiciosRoutes);
router.use('/trabajos', TrabajosRoutes);
router.use('/usuarios', UsuariosRoutes);

module.exports = router;