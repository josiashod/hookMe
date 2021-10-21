'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const { hashPassword } = use('App/Models/Hooks/User')

class User extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', hashPassword)
  }

  files(){
    return this.hasMany('App/Models/File')
  }

  static get hidden() {
    return [
      'password',
      'password_reset_digest',
      'remember_digest',
      'password_reset_sent_at',
      'confirmation_digest',
      'confirmation_sent_at',
    ]
  }
}

module.exports = User
