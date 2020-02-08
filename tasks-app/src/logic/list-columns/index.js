const { validate, errors: { NotFoundError, CredentialsError } } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

export default function(token) {
  validate.string(token)
  validate.string.notVoid('token', token)

  return (async () => {
    const res = await fetch(`${API_URL}/columns`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    if (res.status === 200) return res.json()
    if (res.status === 401) throw new CredentialsError(JSON.parse(res.body).message)
    if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)
    throw new Error(JSON.parse(res.body).message)
  })()
}
