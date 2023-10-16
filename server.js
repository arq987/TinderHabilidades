//Configuración del servidor
const express = require('express');

const server = express();

const port = 3000;

const Routes = require('./routes');

server.use('/api/v1', Routes);

server.listen(port, () => {
    console.log(`La API se encuentra escuchando en el puerto ${port}`)
});