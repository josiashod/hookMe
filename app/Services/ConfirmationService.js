'use strict'

const User = use('App/Models/User')
const AuthMailer = use('App/Mailers/AuthMailer')
const Config = use('Config')
const Logger = use('Logger').transport('console')
const HttpException = use('App/Exceptions/HttpException')
const TokenService = use('App/Services/TokenService')
const trans = use('Antl').formatMessage

class ConfirmationService {
  static async sendConfirmaton(email) {
    const user = await User.findBy('email', email)

    if (!user) {
      throw new HttpException(trans('errors.user_not_found'), 404)
    }

    if (user.confirmed_at) {
      throw new HttpException(trans('auth.email_already_confirmed'), 400)
    }

    const { token, digest } = TokenService.generateTokenAndDigest()
    AuthMailer.sendConfirmation(user, token)
      .then(() => {
      })
      .catch((e) => Logger.error(e))

    user.merge({
      confirmation_digest: digest,
      confirmation_sent_at: new Date()
    })
    await user.save()
  }

  static async confirm(token, email) {
    const user = await User.findBy('email', email)

    if (!user) {
      throw new HttpException(trans('errors.user_not_found'), 404)
    }

    if (user.confirmed_at) {
      throw new HttpException(trans('auth.email_already_confirmed'), 400)
    }

    const timeOut = (new Date().getTime() - user.confirmation_sent_at.getTime()) / 1000

    if (timeOut > Config.get('mail.confirmationTokenTimeOut')) {
      throw new HttpException(trans('auth.token_expired'), 400)
    }

    if (!TokenService.validateToken(token, user.confirmation_digest)) {
      throw new HttpException(trans('auth.token_invalid'), 400)
    }

    user.merge({
      confirmation_digest: null,
      confirmed_at: new Date()
    })
    await user.save()
  }
}

module.exports = ConfirmationService
