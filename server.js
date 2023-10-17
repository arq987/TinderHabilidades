// Configuración del servidor
const express = require('express')
const expressSession = require('express-session')
const { auth } = require('express-openid-connect')
const dotenv = require('dotenv')

dotenv.config()
const server = express()

const port = 3000

const Routes = require('./routes')

server.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

server.use(express.json())

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_CLIENT_SECRET,
  baseURL: process.env.AUTH0_CALLBACK_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`
}

server.use(auth(authConfig))

// server.use('/', require('./routes/AuthRoutes'));
server.use('/api/v1', Routes)
server.get('/login', (req, res) => {
  res.render('components/Login')
})
server.listen(port, () => {
  console.log(`La API se encuentra escuchando en el puerto ${port}`)
})
