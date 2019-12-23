import React from 'react'
import './index.sass'
import Feedback from '../Feedback'

export default function({ onRegister, onBack, error }) {
  return <>
    <header className='login-title'>
      <h1>Tasksboard</h1>
    </header>
    <section className='register'>
      <h2 className='register__title'>Please, introduce your details</h2>
      <form className="register__form" onSubmit={function (event) {
            event.preventDefault()
            const { name: { value: name }, surname: { value: surname }, email: { value: email }, username: { value: username }, password: { value: password } } = event.target
            onRegister(name, surname, email, username, password)
        }}>
        <input className='form__input' type="text" name="name"
          placeholder="name" />
        <input className='form__input' type="text" name="surname"
          placeholder="surname" />
        <input className='form__input' type="text" name="email"
          placeholder="email" />
        <input className="form__input" type="username" name="username" placeholder="username" />
        <input className='form__input' type="password" name="password"
          placeholder="password" />
        <button className='form__button form__button--register'>Create account</button>
      </form>
      <button className='form__button form__button--register-back'
        onClick={event => {
                event.preventDefault()

                onBack()
      }}>Go back</button>
      {error && <Feedback message={error} />}
    </section>
  </>
}
