const { validate, errors: { CredentialsError } } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

export default function(username, password) {
  validate.string(username)
  validate.string.notVoid('username', username)
  validate.string(password)
  validate.string.notVoid('password', password)

  return (async () => {
    const res = await fetch(`${API_URL}/users/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })

    if (res.status === 200) return res.json()
    if (res.status === 401) throw new CredentialsError(JSON.parse(res.body).message)
    throw new Error(JSON.parse(res.body).message)
  })()
}
