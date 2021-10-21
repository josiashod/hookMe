'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatchSchema extends Schema {
  up () {
    this.create('matches', (table) => {
      table.increments()
      
      table.integer('user_id').unsigned().index().nullable()
      table.foreign('user_id').references('users.id');

      table.integer('match_user_id').unsigned().index().nullable()
      table.foreign('match_user_id').references('users.id');

      table.timestamps()
    })
  }

  down () {
    this.drop('matches')
  }
}

module.exports = MatchSchema
