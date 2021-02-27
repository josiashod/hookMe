'use strict'

const MailService = use('App/Services/MailService')
const Config = use('Config')
const trans = use('Antl').formatMessage

class AuthMailer {
  static async sendConfirmation(user, token) {
    const link = `${Config.get('app.clientUrl')}/auth/confirmations/${token}?email=${user.email}`

    await MailService.sendEmail(
      'emails.confirm-account',
      { link },
      trans('mail.auth.signup.confirmation.subject'),
      user.email
    )
  }
}

module.exports = AuthMailer


