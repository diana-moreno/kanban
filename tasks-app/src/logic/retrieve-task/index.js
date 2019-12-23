const call = require('../../utils/call')
const { validate, errors: { NotFoundError } } = require('tasks-util')
const API_URL = process.env.REACT_APP_API_URL

module.exports = function (token, taskId) {
    validate.string(token)
    validate.string.notVoid('token', token)

    validate.string(taskId)
    validate.string.notVoid('taskId', taskId)

    return (async () => {
        const res = await call(`${API_URL}/tasks/${taskId}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        })

        if (res.status === 200) return JSON.parse(res.body).task

        if (res.status === 404) throw new NotFoundError(JSON.parse(res.body).message)

        throw new Error(JSON.parse(res.body).message)
    })()
}