'use strict'

const Config = use('Config')
const Mail = use('Mail')

class MailService {
  static async sendEmail(view, data, subject, to) {
    await Mail.send(view, data, (message) => {
      message.to(to).from(Config.get('mail.senderMail')).subject(subject)
    })
  }
}

module.exports = MailService
