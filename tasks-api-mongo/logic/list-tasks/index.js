const validate = require('../../utils/validate')
const database = require('../../utils/database')
const { ObjectId } = database
const { NotFoundError } = require('../../utils/errors')

module.exports = function(id) {
  validate.string(id)
  validate.string.notVoid('id', id)
  if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

  const client = database()
  return client.connect()
    .then(db => {
      users = db.collection('users')
      tasks = db.collection('tasks')

      return users.findOne({ _id: ObjectId(id) })
        .then(user => {
          if (!user) throw new NotFoundError(`user with id ${id} not found`)
          return tasks.find({ user: ObjectId(id) }).toArray()
            .then(list => {
              return tasks.updateMany({ user: ObjectId(id) }, { $set: { lastAccess: new Date } })
            })
            .then(() => {
              return tasks.find({ user: ObjectId(id) }).toArray()
            })
        })
    })
}

/*
return client.connect()
  .then(connection => {
    const db = connection.db()

    const users = db.collection('users')
    const tasks = db.collection('tasks')

    return users.findOne({ _id: ObjectId(id) })
      .then(user => {
        if (!user) throw new NotFoundError(`user with id ${id} not found`)

        return tasks.find({ user: user._id }).toArray()
      })
      .then(_tasks => {
        const lastAccess = new Date

        const updates = _tasks.map(({ _id }) => tasks.updateOne({ _id }, { $set: { lastAccess } }))

        return Promise.all(updates)
          .then(() => {
            _tasks.forEach(task => {
              task.id = task._id.toString()
              delete task._id

              task.user = id

              task.lastAccess = lastAccess
            })

            return _tasks
          })
      })
  })
*/
