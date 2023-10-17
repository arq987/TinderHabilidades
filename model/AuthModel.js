//  const connection = require('../knexfile').development

//  const database = require('knex')(connection)

const { auth } = require('express-openid-connect')
const dotenv = require('dotenv')
dotenv.config()

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_CLIENT_SECRET,
  baseURL: process.env.AUTH0_CALLBACK_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`
}

const authMiddleware = auth(authConfig)

module.exports = {
  authMiddleware
}
