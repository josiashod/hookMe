'use strict'

const bcrypt = require('bcrypt')

class TokenService {
  static generateToken() {
    return Math.random().toString(36).substring(2, 15)
  }

  static hashToken(token) {
    return bcrypt.hashSync(token, 10)
  }

  static generateTokenAndDigest() {
    const token = this.generateToken()
    const digest = this.hashToken(token, 10)

    return { token, digest }
  }

  static validateToken(token, hash) {
    return bcrypt.compareSync(token, hash)
  }
}

module.exports = TokenService
