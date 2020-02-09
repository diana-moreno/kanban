const { validate } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

export default async function(token) {
  validate.string(token)
  validate.string.notVoid('token', token)

  const response = await fetch(`${API_URL}/columns`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  const result = await response.json()

  if (response.ok) {
    return result.columns
  } else {
    throw new Error(result.message)
  }
}
