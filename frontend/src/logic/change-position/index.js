const { validate } = require('../../app-utils');
const API_URL = process.env.REACT_APP_API_URL;

export default async function (token, column) {
  validate.string(token);
  validate.string.notVoid('token', token);

  const response = await fetch(`${API_URL}/columns`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ column }),
  });

  const result = await response.text();

  if (response.ok) {
    return;
  } else {
    throw new Error(result.message);
  }
}
