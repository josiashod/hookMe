'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')
const Helpers = use('App/Helpers')

class HttpException extends LogicalException {
  constructor(message, status, code = null) {
    super(message, status, code)
  }

  handle(error, { response }) {
    const content = Helpers.isString(this.message)
      ? { message: this.message }
      : this.message

    return response.status(this.status).send(content)
  }
}

module.exports = HttpException
