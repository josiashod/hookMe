'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('firstname', 190)
      table.string('lastname', 190)
      table.string('username', 190).notNullable().unique()
      table.string('email', 100).notNullable().unique()
      table.string('profile_picture')
      
      table.string('country')
      table.string('city')
      table.string('sexe', 6)
      table.string('preferences', 6)
      table.integer('tokens')

      // the role of the user -> Admin or user
      table.string('role')

      table.string('password', 100)
      table.string('password_reset_digest', 100)
      table.datetime('password_reset_sent_at')
      table.string('confirmation_digest', 100)
      table.datetime('confirmation_sent_at')
      table.datetime('confirmed_at')
      table.string('remember_digest', 100)
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UsersSchema
