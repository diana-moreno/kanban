const extractToken = require('../utils/extract-token')
const jwt = require('jsonwebtoken')

module.exports = function(secret) {
  return function(req, res, next) {
    const token = extractToken(req)

    if (!token) return res.status(401).json({ message })

    try {
      const { sub: id } = jwt.verify(token, secret)

      req.id = id // guarda user id en la request

      next()
    } catch ({ message }) {
      res.status(401).json({ message })
    }
  }
}
