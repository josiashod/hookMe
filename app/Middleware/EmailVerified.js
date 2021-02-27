'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User')
const HttpException = use('App/Exceptions/HttpException')
const trans = use('Antl').formatMessage

class EmailVerified {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request }, next) {
    let user = await User.findBy('email', request.input('email'))

    if (!user) {
      throw new HttpException(trans('errors.user_not_found'), 400)
    }

    if (!user.confirmed_at) {
      throw new HttpException(trans('errors.should_confirm_account'), 401)
    }

    await next()
  }
}

module.exports = EmailVerified
