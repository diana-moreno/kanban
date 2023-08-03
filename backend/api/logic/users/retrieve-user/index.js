const {
  validate,
  errors: { NotFoundError, ContentError },
} = require('../../../../utils');
const {
  ObjectId,
  models: { User },
} = require('data');

module.exports = function (id) {
  validate.string(id);
  validate.string.notVoid('id', id);
  if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`);

  return (async () => {
    const user = await User.findById(id);

    if (!user) throw new NotFoundError(`user with id ${id} not found`);

    const { name, surname, email, username } = user.toObject();

    return { id, name, surname, email, username };
  })();
};
