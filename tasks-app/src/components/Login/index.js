import React from 'react'
import './index.sass'
import Feedback from '../Feedback'

export default function({ onRegister, onLogin, onBack, error  }) {
  return <>
    <header className='login-title'>
      <h1>Tasksboard</h1>
    </header>
    <section className='landing'>
      <h2 className='landing__title'>Login to enter</h2>
      <form className='landing__form' onSubmit={function (event) {
            event.preventDefault()

            const { username: { value: username }, password: { value: password } } = event.target

            onLogin(username, password)
        }}>
        <input className='form__input' type="text" name="username"
          placeholder="email"/>
        <input className='form__input' type="password" name="password"
          placeholder="password"/>
        <button type='submit' className='form__button form__button--login'>
          Login
        </button>
      </form>
      <button className='form__button form__button--register'>
        <a href="" onClick={event => { event.preventDefault(); onRegister() }}>Create account</a>
      </button>
      {error && <Feedback message={error} />}
    </section>
  </>
}
