const { validate } = require('../../app-utils');
const API_URL = process.env.REACT_APP_API_URL;

export default async function (token) {
  validate.string(token);
  validate.string.notVoid('token', token);

  const response = await fetch(`${API_URL}/columns`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const result = await response.text();

  if (response.ok) {
    return;
  } else {
    throw new Error(result.message);
  }
}
