'use strict'

const Validator = use('App/Helpers/Validator')
const rules = use('App/ValidationRules/Auth/Login')

class AuthLogin extends Validator {

  get rules () {
    return rules
  }
}

module.exports = AuthLogin
