require('dotenv').config()
const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const listTasks = require('.')
const { random } = Math
const database = require('../../utils/database')
const { ObjectId } = database
const { ContentError, CredentialsError, NotFoundError } = require('../../utils/errors')

describe('logic - list tasks', () => {

  let client, users, tasks

  before(() => {
    client = database(DB_URL_TEST)

    return client.connect()
      .then(db => {
        users = db.collection('users')
        tasks = db.collection('tasks')
      })
  })

  let id, name, surname, email, username, password

  beforeEach(() => {
    name = `name-${random()}`
    surname = `surname-${random()}`
    email = `email-${random()}@mail.com`
    username = `username-${random()}`
    password = `password-${random()}`

    return Promise.all([users.deleteMany(), tasks.deleteMany()])
      .then(() => users.insertOne({ name, surname, email, username, password }))
      .then(({ insertedId }) => id = insertedId.toString())
      .then(() => {
        taskIds = []
        titles = []
        descriptions = []

        const insertions = []

        for (let i = 0; i < 10; i++) {
          const task = {
            user: ObjectId(id),
            title: `title-${random()}`,
            description: `description-${random()}`,
            status: 'REVIEW',
            date: new Date
          }

          insertions.push(tasks.insertOne(task)
            .then(result => taskIds.push(result.insertedId.toString())))

          titles.push(task.title)
          descriptions.push(task.description)
        }

        for (let i = 0; i < 10; i++)
          insertions.push(tasks.insertOne({
            user: ObjectId(),
            title: `title-${random()}`,
            description: `description-${random()}`,
            status: 'REVIEW',
            date: new Date
          }))

        return Promise.all(insertions)
      })
  })

  it('should succeed on correct user and task data', () =>
    listTasks(id)
    .then(result => {
      expect(result).to.exist
      expect(result).to.have.length.greaterThan(0)
      expect(result).to.be.an.instanceOf(Array)
      expect(result.length).to.be.equal(10)

      result.forEach(task => {
        expect(task._id.toString()).to.exist
        expect(task.user.toString()).to.equal(id)

        expect(task.status).to.be.a('string')
        expect(task.date).to.be.an.instanceOf(Date)

        expect(task.title).to.exist
        expect(task.title).to.be.a('string')

        expect(task.description).to.exist
        expect(task.description).to.be.a('string')
        expect(task.description).to.have.length.greaterThan(0)

        expect(task.status).to.exist
        expect(task.status).to.be.a('string')
        expect(task.status).to.have.length.greaterThan(0)
        expect(task.lastAccess).to.exist
        expect(task.lastAccess).to.be.an.instanceOf(Date)
      })
    })
  )

  it('should fail on incorrect user', () => {
    const id = '123456789123456789123456'
    return listTasks(id)
      .then(() => { throw new Error('should not reach this point') })
      .catch(error => {
        expect(error).to.exist
        expect(error).to.be.an.instanceOf(NotFoundError)
        expect(error.message).to.equal(`user with id ${id} not found`)
      })
  })

  it('should fail on incorrect id type', () => {
    expect(() => listTasks(1)).to.throw(TypeError, '1 is not a string')
    expect(() => listTasks(true)).to.throw(TypeError, 'true is not a string')
    expect(() => listTasks([])).to.throw(TypeError, ' is not a string')
    expect(() => listTasks({})).to.throw(TypeError, '[object Object] is not a string')
    expect(() => listTasks(undefined)).to.throw(TypeError, 'undefined is not a string')
    expect(() => listTasks(null)).to.throw(TypeError, 'null is not a string')

    expect(() => listTasks('')).to.throw(ContentError, 'id is empty or blank')
    expect(() => listTasks(' \t\r')).to.throw(ContentError, 'id is empty or blank')
  })

  after(() => Promise.all([users.deleteMany(), tasks.deleteMany()]).then(client.close))
})
