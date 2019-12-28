const { validate, errors: { NotFoundError, ConflictError, ContentError } } = require('tasks-util')
const { ObjectId, models: { User, Task, Column } } = require('tasks-data')

module.exports = function(id, taskId, status) {
  validate.string(id)
  validate.string.notVoid('id', id)
  if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

  validate.string(taskId)
  validate.string.notVoid('task id', taskId)
  if (!ObjectId.isValid(taskId)) throw new ContentError(`${taskId} is not a valid task id`)

  validate.string(status)
  validate.string.notVoid('status', status)

  return (async () => {
    const user = await User.findById(id)

    if (!user) throw new NotFoundError(`user with id ${id} not found`)

    const task = await Task.findById(taskId)

    if (!task) throw new NotFoundError(`user does not have task with id ${taskId}`)

    if (task.user.toString() !== id.toString()) throw new ConflictError(`user with id ${id} does not correspond to task with id ${taskId}`)

    await Task.deleteOne({ _id: ObjectId(taskId) })

    const column = await Column.findOne({ user: ObjectId(id), status })
    const columnTasks = column.tasks
    const indexTask = columnTasks.indexOf(ObjectId(taskId))
    columnTasks.splice(indexTask, 1)

    await Column.updateOne({ user: ObjectId(id), status }, { tasks: columnTasks })
  })()
}
