const { Router } = require('express')
const { listColumns, changePosition, createColumns } = require('../../logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const tokenVerifier = require('../../helpers/token-verifier')(SECRET)
const bodyParser = require('body-parser')
const { errors: { NotFoundError, ConflictError, CredentialsError } } = require('tasks-util')

const jsonBodyParser = bodyParser.json()
const router = Router()


router.get('/', tokenVerifier, jsonBodyParser, (req, res) => {
  try {
  const { id } = req

    listColumns(id)
      .then(columns => res.json(columns))
      .catch(error => {
        const { message } = error

        if (error instanceof NotFoundError)
          return res.status(404).json(message)
        if (error instanceof ConflictError)
          return res.status(409).json(message)

        res.status(500).json(message)
      })
  } catch ({ message }) {
    res.status(400).json(message)
  }
})

router.put('/', tokenVerifier, jsonBodyParser, (req, res) => {
  try {
  const { id, body: { column } } = req

    changePosition(id, column)
      .then(() => res.status(201).end())
      .catch(error => {
        const { message } = error

        if (error instanceof NotFoundError)
          return res.status(404).json(message)
        if (error instanceof ConflictError)
          return res.status(409).json(message)

        res.status(500).json(message)
      })
  } catch ({ message }) {
    res.status(400).json(message)
  }
})

router.post('/', tokenVerifier, (req, res) => {
  try {
  const { id } = req

    createColumns(id)
      .then(() => res.end())
      .catch(error => {
        const { message } = error

        if (error instanceof NotFoundError)
          return res.status(404).json(message)
        if (error instanceof ConflictError)
          return res.status(409).json(message)

        res.status(500).json(message)
      })
  } catch ({ message }) {
    res.status(400).json(message)
  }
})

module.exports = router