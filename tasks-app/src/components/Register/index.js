import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.sass'
import Feedback from '../Feedback'
import logic from '../../logic'
const { registerUser, } = logic

export default withRouter(function({ onBack, error, history  }) {

  async function onRegister(name, surname, email, username, password) {
    try {
      await registerUser(name, surname, email, username, password)
      history.push('/login')
    } catch (error) {
      console.error(error)
    }
  }

  function handleRegister(event) {
    event.preventDefault()
    const { name: { value: name }, surname: { value: surname }, email: { value: email }, username: { value: username }, password: { value: password } } = event.target
    onRegister(name, surname, email, username, password)
  }

  return <>
    <header className='login-title'>
      <h1>Kanban</h1>
    </header>
    <section className='register'>
      <h2 className='register__title'>Please, introduce your details</h2>
      <form
        className="register__form"
        onSubmit={handleRegister}
      >
        <input
          className='form__input'
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          className='form__input'
          type="text"
          name="surname"
          placeholder="surname"
        />
        <input
          className='form__input'
          type="text"
          name="email"
          placeholder="email"
        />
        <input
          className="form__input"
          type="username"
          name="username"
          placeholder="username"
        />
        <input
          className='form__input'
          type="password"
          name="password"
          placeholder="password"
        />
        <button className='form__button form__button--register'>Create account</button>
        <button
          type='button'
          className='form__button form__button--register-back'
          onClick={event => {
                  event.preventDefault()
                  onBack()
        }}>Go back</button>
      </form>
      {error && <Feedback message={error} />}
    </section>
  </>
})
