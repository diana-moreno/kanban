const { Schema, ObjectId } = require('mongoose')
const User = require('./user')

module.exports =  new Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },/*,
    status: {
        type: String,
        required: true,
        enum: ['TODO', 'DOING', 'REVIEW', 'DONE']
    },*/
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastAccess: {
        type: Date
    }
})