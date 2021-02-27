'use strict'

class MyValidator {
  async fails (errorMessages) {
    return this.ctx.response.status(400).json({
      errors: errorMessages
    })
  }
}

module.exports = MyValidator
