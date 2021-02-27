'use strict'

const Validator = use('App/Helpers/Validator')
const rules = use('App/ValidationRules/Auth/Register')

class AuthRegister extends Validator {

  get rules () {
    return rules
  }
}

module.exports = AuthRegister
