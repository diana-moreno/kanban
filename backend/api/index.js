require('dotenv').config();

const express = require('express');
const { name, version } = require('./package.json');
const jwt = require('jsonwebtoken');
const {
  argv: [, , port],
  env: { PORT = port || 8080, DB_URL },
} = process;
const cors = require('cors');
const { database } = require('app-data');
const { users, tasks, columns } = require('./routes');

const api = express();

api.use(cors());
api.use('/users', users);
api.use('/tasks', tasks);
api.use('/columns', columns);

database
  .connect(DB_URL)
  .then(() =>
    api.listen(PORT, () =>
      console.log(`${name} ${version} up and running on port ${PORT}`)
    )
  );
