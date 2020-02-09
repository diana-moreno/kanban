const { validate } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

export default async function(username, password) {
  validate.string(username)
  validate.string.notVoid('username', username)
  validate.string(password)
  validate.string.notVoid('password', password)

  const response = await fetch(`${API_URL}/users/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })

  const result = await response.json()

  if (response.ok) {
    return result.token
  } else {
    throw new Error(result.message)
  }
}
