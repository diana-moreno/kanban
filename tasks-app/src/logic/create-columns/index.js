const { validate, errors: { CredentialsError, NotFoundError, ConflictError } } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

export default function(token) {
  validate.string(token)
  validate.string.notVoid('token', token)

  return (async () => {
    const res = await fetch(`${API_URL}/columns`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    if (res.status === 200) return
    if (res.status === 401) throw new CredentialsError(res.json())
    if (res.status === 404) throw new NotFoundError(res.json())
    if (res.status === 409) throw new ConflictError(res.json())
  })()
}