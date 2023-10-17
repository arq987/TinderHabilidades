const AuthModel = require('../model/AuthModel')

const showLogin = (req, res) => {
  res.render('login')
}

const login = (req, res) => {
  AuthModel.authMiddleware()
  res.oidc.login()
}

const logout = (req, res) => {
  res.oidc.logout()
}

module.exports = {
  showLogin,
  login,
  logout
}
