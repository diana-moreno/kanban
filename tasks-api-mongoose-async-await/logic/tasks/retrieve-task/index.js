const { validate, errors: { NotFoundError, ContentError } } = require('tasks-util')
const { ObjectId, models: { User, Task, Column } } = require('tasks-data')

module.exports = function (id, taskId) {
    validate.string(id)
    validate.string.notVoid('id', id)
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

    validate.string(taskId)
    validate.string.notVoid('taskId', taskId)

    return (async () => {
        const user = await User.findById(id)
        if (!user) throw new NotFoundError(`user with id ${id} not found`)

        const task = await Task
            .find({ user: ObjectId(id), _id: ObjectId(taskId) })
            .lean()
        return task
    })()