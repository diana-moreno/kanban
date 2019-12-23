const validate = require('../../utils/validate')
const { ConflictError } = require('../../utils/errors')
const { models: { User } } = require('../../data')

module.exports = function(name, surname, email, username, password) {
  validate.string(name) // errores síncronos se va al catch de los try
  validate.string.notVoid('name', name)
  validate.string(surname)
  validate.string.notVoid('surname', surname)
  validate.string(email)
  validate.string.notVoid('e-mail', email)
  validate.email(email)
  validate.string(username)
  validate.string.notVoid('username', username)
  validate.string(password)
  validate.string.notVoid('password', password)


  return User.findOne({ username })
    .then(user => {
      if (user) throw new ConflictError(`user with username ${username} already exists`)
      return User.create({ name, surname, email, username, password })
    })
    .then(() => {})
}
