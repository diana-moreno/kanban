const {
  validate,
  errors: { NotFoundError, ContentError },
} = require('../../../../utils');
const {
  ObjectId,
  models: { User, Task, Column },
} = require('app-data');

module.exports = function (id) {
  validate.string(id);
  validate.string.notVoid('id', id);
  if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`);

  return (async () => {
    const user = await User.findById(id);

    if (!user) throw new NotFoundError(`user with id ${id} not found`);

    const columns = await Column.find({ user: ObjectId(id) }, { __v: 0 });

    if (columns.length === 0) {
      await Column.create({ user: ObjectId(id), status: 'TODO', index: 0 });
      await Column.create({ user: ObjectId(id), status: 'DOING', index: 1 });
      await Column.create({ user: ObjectId(id), status: 'REVIEW', index: 2 });
      await Column.create({ user: ObjectId(id), status: 'DONE', index: 3 });
    }
  })();
};
