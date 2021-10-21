'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Chat extends Model {

    sender(){
        return this.belongsTo('App/Models/User', 'sender_id', 'id')
    }

    receiver(){
        return this.belongsTo('App/Models/User', 'receiver_id', 'id')
    }

    files(){
        return this.hasMany('App/Models/File')
    }

    static get hidden() {
        return [
          'sender_id',
          'receiver_id',
        ]
      }
}

module.exports = Chat
