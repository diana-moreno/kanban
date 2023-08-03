const {
  validate,
  errors: { NotFoundError, ConflictError, ContentError },
} = require('../../../../app-utils');
const {
  ObjectId,
  models: { User, Task },
} = require('../../../../app-data');

module.exports = function (id, taskId, newTitle) {
  validate.string(id);
  validate.string.notVoid('id', id);
  if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`);

  validate.string(taskId);
  validate.string.notVoid('task id', taskId);
  if (!ObjectId.isValid(taskId))
    throw new ContentError(`${taskId} is not a valid task id`);

  validate.string(newTitle);
  validate.string.notVoid('newTitle', newTitle);

  return (async () => {
    const user = await User.findById(id);

    if (!user) throw new NotFoundError(`user with id ${id} not found`);

    const task = await Task.findById(taskId);

    if (!task)
      throw new NotFoundError(`user does not have task with id ${taskId}`);

    if (task.user.toString() !== id.toString())
      throw new ConflictError(
        `user with id ${id} does not correspond to task with id ${taskId}`
      );

    await Task.updateOne(
      { user: ObjectId(id), _id: ObjectId(taskId) },
      { title: newTitle }
    );
  })();
};
