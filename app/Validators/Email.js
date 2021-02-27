'use strict'

const Validator = use('App/Helpers/Validator')
const rules = use('App/ValidationRules/Email')

class Email extends Validator {

  get rules () {
    return rules
  }
}

module.exports = Email
