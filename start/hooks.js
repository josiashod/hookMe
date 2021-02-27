const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersRegistered(() => {
  require('./bootstrap/validators')
})
