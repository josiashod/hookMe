'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', (table) => {
      table.increments()

      table.string('file_name')
      table.string('file_type')
      table.string('file_url')

      table.integer('user_id').unsigned().index().nullable()
      table.foreign('user_id').references('users.id');

      table.integer('chat_id').unsigned().index().nullable()
      table.foreign('chat_id').references('chats.id');

      table.timestamps()
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema
