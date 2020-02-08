const { validate, errors: { NotFoundError, CredentialsError } } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

export default function(token, column) {
  validate.string(token)
  validate.string.notVoid('token', token)

  return (async () => {
    const res = await fetch(`${API_URL}/columns`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ column })
    })

    if (res.status === 201) return
    if (res.status === 401) throw new CredentialsError(res.json())
    if (res.status === 404) throw new NotFoundError(res.json())
    throw new Error(res.json())
  })()
}
