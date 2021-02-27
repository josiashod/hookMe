'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ModelNotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
}

module.exports = ModelNotFoundException
