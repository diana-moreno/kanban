import React, { useState, useEffect } from 'react';
import Register from '../Register'
import Login from '../Login'
import Board from '../Board'
import { Route, withRouter, Redirect } from 'react-router-dom'
import logic from '../../logic'
const { retrieveUser } = logic

export default withRouter(function({ history }) {
  const [name, setName] = useState()

  useEffect(() => {

    (async () => {
      if (token) {
        const { name } = await retrieveUser(token)
        setName(name)
      }
    })()
  }, [sessionStorage.token])

  const { token } = sessionStorage;

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
      exact path='/login'
      render={() => <Login onBack={handleGoBack} />}
    />
    <Route
      path="/register"
      render={() => <Register onBack={handleGoBack} />}
    />
    <Route path="/tasks">
      { token ? <Board user={name} onLogout={handleLogout} onBack={handleGoBack} /> : <Redirect to="/" /> }
    </Route>
  </>
})
