'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  // Register & Login
  Route.post('auth/register', 'AuthController.register').validator('Auth/Register')
  Route.post('auth/login', 'AuthController.login')
    .validator('Auth/Login')
    .middleware(['emailVerified'])

  // Profile & Account
  Route.get('me/profile', 'ProfileController.profile').middleware(['auth'])


  // Confirmations
  Route.post('auth/confirmations', 'ConfirmationController.sendConfirmation')
    .as('confirmations.create').validator('Email')
  Route.put('auth/confirmations/:token', 'ConfirmationController.confirm')
    .as('confirmations.verify')
})
  .prefix('api')
  .formats(['json'])
