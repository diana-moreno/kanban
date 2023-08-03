const { validate } = require('../../app-utils');
const API_URL = process.env.REACT_APP_API_URL;

export default async function (token, taskId, status) {
  validate.string(token);
  validate.string.notVoid('token', token);

  validate.string(taskId);
  validate.string.notVoid('task id', taskId);

  validate.string(status);
  validate.string.notVoid('status', status);

  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });

  const result = await response.text();

  if (response.ok) {
    return;
  } else {
    throw new Error(result.message);
  }
}
