'use strict'

const AuthService = use('App/Services/AuthService')

class ProfileController {
  async profile({ auth, response }) {
    return response.json({
      data: auth.user
    })
  }
}

module.exports = ProfileController
