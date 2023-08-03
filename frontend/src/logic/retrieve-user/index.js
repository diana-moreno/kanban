const { validate } = require('utils');
const API_URL = process.env.REACT_APP_API_URL;

export default async function (token) {
  validate.string(token);
  validate.string.notVoid('token', token);

  const response = await fetch(`${API_URL}/users`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

  const result = await response.json();

  if (response.ok) {
    return result.user;
  } else {
    throw new Error(result.message);
  }
}
