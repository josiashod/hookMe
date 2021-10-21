'use strict'

module.exports = {
	email: 'required|email|unique:users',
	username: 'required|alpha_numeric|unique:users',
	password: 'required|min:6',
	firstname: 'required',
	lastname: 'required',
	country: 'required',
	city: 'required',
	sexe: 'required|in:female,male',
	preferences: 'required|in:female,male',
}
