'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const AuthMailer = use('App/Mailers/AuthMailer')
const Logger = use('Logger').transport('console')
const TokenService = use('App/Services/TokenService')

class AuthService {
  static async register(auth, data, token) {
    const trx = await Database.beginTransaction()
    try {
      const { token, digest } = TokenService.generateTokenAndDigest()
      data.confirmation_digest = digest
      data.confirmation_sent_at = new Date
      const user = await User.create(data, trx)

      AuthMailer.sendConfirmation(user, token)
        .then(() => {
        })
        .catch((e) => Logger.error(e))

      trx.commit()
    } catch (error) {
      await trx.rollback()
      throw error
    }
  }

  static async login(auth, { email, password }) {
    return await auth.attempt(email, password)
  }
}

module.exports = AuthService
