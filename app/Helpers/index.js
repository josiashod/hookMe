'use strict'

const { NotFound } = require('http-errors')

// o : object, p : path, d : default
const get = (o, p, d) =>
  p.reduce((xs, x) => (xs && xs[x] ? xs[x] : d || undefined), o)
global.get = get

const isString = (val) => typeof val === 'string' || val instanceof String

const isInstanceOfSome = (typesList) => (tobeMatched) =>
  typesList.some((oneType) => tobeMatched instanceof oneType)

const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`

const snakeToCamel = (str) =>
  str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  )

const snakeToPascal = (str) => uppercaseFirst(snakeToCamel(str))

const sanitizeObject = (theObj) => {
  let obj = JSON.parse(JSON.stringify(theObj))
  Object.keys(obj).forEach((key) => obj[key] == null && delete obj[key])

  return obj
}

const uniqId = () => +new Date() + '_' + Math.random().toString(36).substr(2, 9)

const paginationParams = (request) => ([
  request.input('page'),
  request.input('per_page')
])

module.exports = {
  isInstanceOfSome,
  snakeToCamel,
  isString,
  sanitizeObject,
  get,
  uniqId,
  paginationParams
}

