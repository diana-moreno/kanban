module.exports = {
  authenticateUser: require('./users/authenticate-user'),
  registerUser: require('./users/register-user'),
  retrieveUser: require('./users/retrieve-user'),
  createTask: require('./tasks/create-task'),
  deleteTask: require('./tasks/delete-task'),
  listColumns: require('./columns/list-columns'),
  changePosition: require('./columns/change-position'),
  createColumns: require('./columns/create-columns')
}
