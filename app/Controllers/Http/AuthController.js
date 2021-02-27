'use strict'

const AuthService = use('App/Services/AuthService')
const RegisterRules = use('App/ValidationRules/Auth/Register')
const { formatMessage: trans } = use('Antl')

class AuthController {
  async register({ request, auth, response }) {
    const data = request.only(Object.keys(RegisterRules))
    await AuthService.register(auth, data)

    return response.json({
      message: trans('auth.signup_successful')
    })
  }

  async login({ request, auth, response }) {
    const token = await AuthService.login(auth, request.only(['email', 'password']))

    return response.json({
      data: token
    })
  }
}

module.exports = AuthController
