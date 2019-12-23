require('dotenv').config()
const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const createTask = require('.')
const { random } = Math
const { NotFoundError, ContentError } = require('../../utils/errors')
const { database, models: { User, Task } } = require('../../data')

describe('logic - create task', () => {
  before(() => database.connect(DB_URL_TEST)) // se conecta

  let id, name, surname, email, username, password, title, description, status

  beforeEach(() => {
    name = `name-${random()}`
    surname = `surname-${random()}`
    email = `email-${random()}@mail.com`
    username = `username-${random()}`
    password = `password-${random()}`

    return Promise.all([User.deleteMany(), Task.deleteMany()])
      .then(() => User.create({ name, surname, email, username, password }))
      .then(user => {
        id = user.id
        // id = result.insertedId.toString() // mongoose sanifica el id
        title = `title-${random()}`
        description = `description-${random()}`
      })

  })

  it('should succeed on correct user and task data', () =>
    createTask(id, title, description, status)
    .then(taskId => {
      expect(taskId).to.exist
      expect(taskId).to.be.a('string')
      expect(taskId).to.have.length.greaterThan(0)

      return Task.findById(taskId)
    })
    .then(task => {
      expect(task).to.exist
      expect(task.user.toString()).to.equal(id)
      expect(task.title).to.equal(title)
      expect(task.description).to.equal(description)
      expect(task.status).to.equal('TODO')
      expect(task.date).to.exist
      expect(task.date).to.be.instanceOf(Date)
    })
  )

  it('should fail on wrong user id', () => {
    id = '123456789123456789123456'

    return createTask(id, title, description, status)
      .then(() => {
        throw Error('should not reach this point')
      })
      .catch(error => {
        expect(error).to.exist
        expect(error).to.be.an.instanceOf(NotFoundError)
        expect(error.message).to.equal(`user with id ${id} not found`)
      })
  })

  it('should fail on incorrect id, title or description type or content', () => {
    expect(() => createTask(1)).to.throw(TypeError, '1 is not a string')
    expect(() => createTask(true)).to.throw(TypeError, 'true is not a string')
    expect(() => createTask([])).to.throw(TypeError, ' is not a string')
    expect(() => createTask({})).to.throw(TypeError, '[object Object] is not a string')
    expect(() => createTask(undefined)).to.throw(TypeError, 'undefined is not a string')
    expect(() => createTask(null)).to.throw(TypeError, 'null is not a string')
    expect(() => createTask('')).to.throw(ContentError, 'id is empty or blank')
    expect(() => createTask(' \t\r')).to.throw(ContentError, 'id is empty or blank')

    expect(() => createTask(id, 1)).to.throw(TypeError, '1 is not a string')
    expect(() => createTask(id, true)).to.throw(TypeError, 'true is not a string')
    expect(() => createTask(id, [])).to.throw(TypeError, ' is not a string')
    expect(() => createTask(id, {})).to.throw(TypeError, '[object Object] is not a string')
    expect(() => createTask(id, undefined)).to.throw(TypeError, 'undefined is not a string')
    expect(() => createTask(id, null)).to.throw(TypeError, 'null is not a string')
    expect(() => createTask(id, '')).to.throw(ContentError, 'title is empty or blank')
    expect(() => createTask(id, ' \t\r')).to.throw(ContentError, 'title is empty or blank')

    expect(() => createTask(id, title, 1)).to.throw(TypeError, '1 is not a string')
    expect(() => createTask(id, title, true)).to.throw(TypeError, 'true is not a string')
    expect(() => createTask(id, title, [])).to.throw(TypeError, ' is not a string')
    expect(() => createTask(id, title, {})).to.throw(TypeError, '[object Object] is not a string')
    expect(() => createTask(id, title, undefined)).to.throw(TypeError, 'undefined is not a string')
    expect(() => createTask(id, title, null)).to.throw(TypeError, 'null is not a string')
    expect(() => createTask(id, title, '')).to.throw(ContentError, 'description is empty or blank')
    expect(() => createTask(id, title, ' \t\r')).to.throw(ContentError, 'description is empty or blank')
  })

  after(() => Promise.all([User.deleteMany(), Task.deleteMany()]).then(database.disconnect))
})
