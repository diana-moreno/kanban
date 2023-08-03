const {
  validate,
  errors: { CredentialsError },
} = require('../../../../app-utils');
const {
  models: { User },
} = require('../../../../app-data');

module.exports = function (username, password) {
  validate.string(username);
  validate.string.notVoid('username', username);
  validate.string(password);
  validate.string.notVoid('password', password);

  return (async () => {
    const user = await User.findOne({ username, password });

    if (!user) throw new CredentialsError('wrong credentials');

    return user.id;
  })();
};
