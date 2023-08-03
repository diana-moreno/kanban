const { validate } = require('utils');
const API_URL = process.env.REACT_APP_API_URL;

export default async function (name, surname, email, username, password) {
  validate.string(name);
  validate.string.notVoid('name', name);
  validate.string(surname);
  validate.string.notVoid('surname', surname);
  validate.string(email);
  validate.string.notVoid('e-mail', email);
  validate.email(email);
  validate.string(username);
  validate.string.notVoid('username', username);
  validate.string(password);
  validate.string.notVoid('password', password);

  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, surname, email, username, password }),
  });

  const result = await response.text();

  if (response.ok) {
    return;
  } else {
    throw new Error(result.message);
  }
}
