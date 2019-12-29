import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.sass'
import Feedback from '../Feedback'
import logic from '../../logic'
const { authenticateUser } = logic

export default withRouter(function({ onBack, error, history  }) {

  async function onLogin(username, password) {
    try {
      const token = await authenticateUser(username, password)
      sessionStorage.token = token
      history.push('/tasks')
    } catch (error) {
      console.error(error)
    }
  }

  function handleLogin(event) {
    event.preventDefault()
    const { username: { value: username }, password: { value: password } } = event.target
    onLogin(username, password)
  }

  function onRegister() { history.push('/register') }

  function handleGoToRegister(event) {
    event.preventDefault()
    onRegister()
  }

  return <>
    <header className='login-title'>
      <h1>Kanban</h1>
    </header>
    <section className='landing'>
      <h2 className='landing__title'>Login to enter</h2>
      <form
        className='landing__form'
        onSubmit={handleLogin}>
        <input
          className='form__input'
          type="text"
          name="username"
          placeholder="email"
        />
        <input
          className='form__input'
          type="password"
          name="password"
          placeholder="password"
        />
        <button type='submit' className='form__button form__button--login'>
          Login
        </button>
        <button
          type='button'
          className='form__button form__button--register'
          onClick={handleGoToRegister}
        >
          <a href="">Create account</a>
        </button>
      </form>
      {error && <Feedback message={error} />}
    </section>
  </>
})
