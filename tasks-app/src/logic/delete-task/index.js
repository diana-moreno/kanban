const { validate, errors: { CredentialsError, NotFoundError, ConflictError } } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

export default function(token, taskId, status) {
  validate.string(token)
  validate.string.notVoid('token', token)

  validate.string(taskId)
  validate.string.notVoid('task id', taskId)

  validate.string(status)
  validate.string.notVoid('status', status)

  return (async () => {
    const res = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })

    if (res.status === 201) return
    if (res.status === 401) throw new CredentialsError(res.json())
    if (res.status === 404) throw new NotFoundError(res.json())
    if (res.status === 409) throw new ConflictError(res.json())
    throw new Error(res.json())
  })()
}
