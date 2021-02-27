'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const HttpException = use('App/Exceptions/HttpException')
const trans = use('Antl').formatMessage

class IsAdmin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */

  // call next to advance the request
  async handle({ auth }, next) {
    if (auth.user && auth.user.role !== 'admin') {
      throw new HttpException(trans('errors.admin_role_required'), 401)
    }

    await next()
  }
}

module.exports = IsAdmin
