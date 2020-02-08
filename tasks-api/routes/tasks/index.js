const { Router } = require('express')
const { createTask, deleteTask } = require('../../logic')
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
      .then((task) => res.json(task))
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
  const { id, params: { id: taskId }, body: { status } } = req

    deleteTask(id, taskId, status)
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

module.exports = router