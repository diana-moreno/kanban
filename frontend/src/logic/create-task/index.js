const { validate } = require('../../app-utils');
const API_URL = process.env.REACT_APP_API_URL;

export default async function (token, status, title) {
  validate.string(token);
  validate.string.notVoid('token', token);
  validate.string(status);
  validate.string.notVoid('status', status);
  validate.string(title);
  validate.string.notVoid('title', title);

  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status, title }),
  });

  const result = await response.json();

  if (response.ok) {
    return result.task;
  } else {
    throw new Error(result.message);
  }
}
