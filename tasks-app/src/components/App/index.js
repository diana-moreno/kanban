import React, { useState, useEffect } from 'react';
import Register from '../Register'
import Login from '../Login'
import Board from '../Board'
import { Route, withRouter } from 'react-router-dom'
import logic from '../../logic'
const { authenticateUser, registerUser, retrieveUser, createColumns } = logic

export default withRouter(function({ history }) {
  const [name, setName] = useState()

  useEffect(() => {
    const { token } = sessionStorage;

    (async () => {
      if (token) {
        const { name } = await retrieveUser(token)
        setName(name)
      }
    })()
  }, [sessionStorage.token])


  function handleGoBack() { history.push('/') }

  function handleLogout() {
    sessionStorage.clear()
    handleGoBack()
  }

  return <>
    <Route
      exact path='/'
      render={() => <Login onBack={handleGoBack} />}
    />
    <Route
      path="/register"
      render={() => <Register onBack={handleGoBack} />}
    />
    <Route
      path="/tasks"
      render={() => <Board user={name}
      onLogout={handleLogout}/>}
    />
  </>
})
