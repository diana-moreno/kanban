const { validate } = require('utils');
const API_URL = process.env.REACT_APP_API_URL;

export default async function (token, taskId, newTitle) {
  validate.string(token);
  validate.string.notVoid('token', token);

  validate.string(taskId);
  validate.string.notVoid('task id', taskId);

  validate.string(newTitle);
  validate.string.notVoid('newTitle', newTitle);

  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ newTitle }),
  });

  const result = await response.text();

  if (response.ok) {
    return;
  } else {
    throw new Error(result.message);
  }
}
