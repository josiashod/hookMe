'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatSchema extends Schema {
  up () {
    this.create('chats', (table) => {
      table.increments()

      table.integer('sender_id').unsigned().index().nullable()
      table.foreign('sender_id').references('users.id');

      table.integer('receiver_id').unsigned().index().nullable()
      table.foreign('receiver_id').references('users.id');

      table.text('message')

      table.timestamps()
    })
  }

  down () {
    this.drop('chats')
  }
}

module.exports = ChatSchema
