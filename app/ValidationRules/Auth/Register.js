'use strict'

module.exports = {
	email: 'required|email|unique:users',
	password: 'required|min:6',
	firstname: 'required',
	lastname: 'required'
}
