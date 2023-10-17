const express = require('express')
const { AuthController } = require('../controller')
const AuthModel = require('../model/AuthModel')

const router = express.Router()

router.get('/login', AuthModel.authMiddleware, AuthController.login)
router.get('/logout', AuthController.logout)
router.get('/callback', AuthModel.authMiddleware, (req, res) => {
  res.redirect('/')
})

module.exports = router
