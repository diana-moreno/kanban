const {
  validate,
  errors: { NotFoundError },
} = require('../../../../utils');
const {
  ObjectId,
  models: { User, Task, Column },
} = require('data');

module.exports = function (id, status, title) {
  validate.string(id);
  validate.string.notVoid('id', id);
  if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`);

  validate.string(status);
  validate.string.notVoid('status', status);

  validate.string(title);
  validate.string.notVoid('title', title);

  return (async () => {
    const user = await User.findById(id);
    if (!user) throw new NotFoundError(`user with id ${id} not found`);

    const task = await Task.create({ user: id, status, title });

    await Column.updateOne(
      { user: ObjectId(id), status },
      { $push: { tasks: task.id } }
    );

    return task;
  })();
};
