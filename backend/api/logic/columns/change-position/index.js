const {
  validate,
  errors: { NotFoundError, ContentError },
} = require('../../../../app-utils');
const {
  ObjectId,
  models: { User, Task, Column },
} = require('../../../../app-data');

module.exports = function (id, column) {
  validate.string(id);
  validate.string.notVoid('id', id);
  if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`);
  //validar que son objetos

  return (async () => {
    const user = await User.findById(id);
    if (!user) throw new NotFoundError(`user with id ${id} not found`);

    const columnId = column.id;
    const columns = await Column.updateOne(
      { user: ObjectId(id), _id: columnId },
      { $set: column }
    );
  })();
};
