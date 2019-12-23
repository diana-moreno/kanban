const { Schema, ObjectId } = require('mongoose')
const Task = require('./task')
const User = require('./user')

module.exports = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  status: {
    type: String,
    required: true,
    enum: ['TODO', 'DOING', 'REVIEW', 'DONE']
  },
  tasks: [{
    type: ObjectId,
    ref: 'Task'
  }],
})
