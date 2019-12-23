import call from '../../utils/call'
const { validate, errors: { NotFoundError, CredentialsError } } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

export default function(token, status) {
  validate.string(token)
  validate.string.notVoid('token', token)

  return (async () => {
    const res = await call(`${API_URL}/tasks`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })

    if (res.status === 200) return JSON.parse(res.body).tasks
    if (res.status === 401) throw new CredentialsError(JSON.parse(res.body).message)
    if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)
    throw new Error(JSON.parse(res.body).message)
  })()
}


/*
fetch('http://192.168.0.41:8000/tasks', {
	headers: {
		'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGQyYjhlMTllYWQ1ZWFiNDllYzRjZTIiLCJpYXQiOjE1NzQwOTEwMzIsImV4cCI6MTU3NDE3NzQzMn0.Q574vZOvPhAjB6yBtjAhKeCe2MUwDmdE6CRoQdP9Oog'
	}
})
	.then(res => res.json())
	.then(res => { debugger })
*/