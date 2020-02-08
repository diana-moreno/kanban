const { validate, errors: { CredentialsError, NotFoundError, ConflictError } } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

export default function(token, status, title) {
  validate.string(token)
  validate.string.notVoid('token', token)
  validate.string(status)
  validate.string.notVoid('status', status)
  validate.string(title)
  validate.string.notVoid('title', title)

  return (async () => {
    const res = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status, title })
    })

    if (res.status === 200) return res.json()
    if (res.status === 401) throw new CredentialsError(res.json())
    if (res.status === 404) throw new NotFoundError(res.json())
    if (res.status === 409) throw new ConflictError(res.json())
  })()
}
