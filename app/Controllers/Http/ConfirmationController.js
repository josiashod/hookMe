'use strict'

const ConfirmationService = use('App/Services/ConfirmationService')
const trans = use('Antl').formatMessage

class ConfirmationController {
  async sendConfirmation({ request, response }) {
    await ConfirmationService.sendConfirmaton(request.input('email'))

    return response.json({
      message: trans('auth.confirmation_sent')
    })
  }

  async confirm({ request, response, params }) {
    await ConfirmationService.confirm(params.token, request.input('email'))

    return response.json({
      message: trans('auth.confirmation_successful')
    })
  }
}

module.exports = ConfirmationController
