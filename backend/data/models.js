const { model } = require('mongoose')
const { user, task, column } = require('./schemas')

module.exports = {
  User: model('User', user),
  Task: model('Task', task),
  Column: model('Column', column)
}
