const validate = require('../../utils/validate')
const { ConflictError } = require('../../utils/errors')
const database = require('../../utils/database')

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


  const client = database() // solo se le pasa la url por parámmetro una vez en index general gracias al singleton, ya que valor ya está inicializado las demás veces

  return client.connect()
    .then(db => {
      const users = db.collection('users')

      return users.findOne({ username })
        .then(user => {
          if (user) throw new ConflictError(`user with username ${username} already exists`)
          return users.insertOne({ name, surname, email, username, password })
        })
        .then(result => {
          if (!result.insertedCount) throw Error('failed to create user')
        })

    })
}
