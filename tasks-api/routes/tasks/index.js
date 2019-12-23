const { Router } = require('express')
const { createTask, removeTask, listTasks, modifyTask, retrieveTask } = require('../../logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const tokenVerifier = require('../../helpers/token-verifier')(SECRET)
const bodyParser = require('body-parser')
const { errors: { NotFoundError, ConflictError, CredentialsError } } = require('tasks-util')

const jsonBodyParser = bodyParser.json()
const router = Router()

router.post('/', jsonBodyParser, tokenVerifier, (req, res) => {
  try {
  const { id, body: { status, title } } = req
    createTask(id, status, title)
      .then((task) => res.json({ task }))
      .catch(error => {
        const { message } = error

        if (error instanceof ConflictError)
          return res.status(409).json({ message })

        res.status(500).json({ message })
      })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
})

router.delete('/:id', jsonBodyParser, tokenVerifier, (req, res) => {
  try {
  const { id, params: { id: practiceId }, body: { instructorId } } = req

    removeTask(instructorId, id, practiceId)
      .then(() => res.status(201).end())
      .catch(error => {
        const { message } = error

        if (error instanceof ConflictError)
          return res.status(409).json({ message })

        res.status(500).json({ message })
      })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
})

router.get('/', tokenVerifier, jsonBodyParser, (req, res) => {
  try {
  const { id, body: { status} } = req
    listTasks(id)
      .then(tasks => res.json({ tasks }))
      .catch(error => {
        const { message } = error

        if (error instanceof NotFoundError)
          return res.status(404).json({ message })
        if (error instanceof ConflictError)
          return res.status(409).json({ message })

        res.status(500).json({ message })
      })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
})

router.get('/:taskId', tokenVerifier, jsonBodyParser, (req, res) => {
  try {
  const { id, params: { taskId } } = req

    retrieveTask(id, taskId)
      .then(task => res.json({ task }))
      .catch(error => {
        const { message } = error

        if (error instanceof NotFoundError)
          return res.status(404).json({ message })
        if (error instanceof ConflictError)
          return res.status(409).json({ message })

        res.status(500).json({ message })
      })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
})

router.put('/feedback/:practiceId', jsonBodyParser, tokenVerifier, (req, res) => {
  try {
    const { id, params: { practiceId }, body: { studentId, comment, valoration } } = req

    modifyTask(id, studentId, practiceId, comment, valoration)
      .then(() => res.status(201).end())
      .catch(error => {
        const { message } = error

        if (error instanceof NotFoundError)
          return res.status(404).json({ message })
        if (error instanceof ConflictError)
          return res.status(409).json({ message })

        res.status(500).json({ message })
      })
  } catch ({ message }) {
    res.status(400).json({ message })
  }
})

module.exports = router