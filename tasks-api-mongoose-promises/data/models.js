const { model } = require('mongoose')
const { user, task } = require('./schemas')

module.exports = {
  User: model('User', user), // User es una colección en Mongo
  Task: model('Task', task)
}
