const {
  validate,
  errors: { NotFoundError, ContentError },
} = require('../../../../utils');
const {
  ObjectId,
  models: { User, Task, Column },
} = require('data');

module.exports = function (id) {
  validate.string(id);
  validate.string.notVoid('id', id);
  if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`);

  return (async () => {
    const user = await User.findById(id);

    if (!user) throw new NotFoundError(`user with id ${id} not found`);

    const columns = await Column.find({ user: ObjectId(id) }, { __v: 0 })
      .populate('tasks')
      .lean();

    columns.forEach((column) => {
      column.id = column._id.toString();
      delete column._id;

      column.user = id;
    });
    return columns;
  })();
};
