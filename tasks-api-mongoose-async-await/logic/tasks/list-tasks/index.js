const { validate, errors: { NotFoundError, ContentError } } = require('tasks-util')
const { ObjectId, models: { User, Task, Column } } = require('tasks-data')

module.exports = function (id) {
    validate.string(id)
    validate.string.notVoid('id', id)
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

    return (async () => {
        const user = await User.findById(id)

        if (!user) throw new NotFoundError(`user with id ${id} not found`)

        await Task.updateMany({ user: id }, { $set: { lastAccess: new Date } })

/*        const tasks = await Task.find({ user: id }, { __v: 0 }).lean()

        tasks.forEach(task => {
            task.id = task._id.toString()
            delete task._id

            task.user = id
        })*/
        const tasks = await Column
            .find({ user: ObjectId(id) })
            .populate('tasks')
            .lean()
        return tasks
    })()
}