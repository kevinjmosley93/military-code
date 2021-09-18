import React, { useState } from 'react'
import Link from 'next/link'

const Login = () => {
  const [formInput, setFormInput] = useState({
    form: {
      email: '',
      password: ''
    }
  })

  const handleChange = e => {
    const updatedField = { [e.target.name]: e.target.value }
    setFormInput(currState => {
      const updatedForm = { ...currState.form, ...updatedField }
      // console.log({ updatedForm })
      return { form: updatedForm }
    })
  }
  const handleForm = async e => {
    try {
      e.preventDefault()
      const { email, password } = formInput.form

      const body = {
        email,
        password
      }

      const url = `${window.location.origin}/api/auth/sign-in`
      const params = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
      const res = await fetch(url, params)
      // console.log({ body })
      const { user } = await res.json()

      user &&
        setFormInput({
          form: {
            email: '',
            password: ''
          }
        })
      window.location.assign('/profile')
    } catch (err) {
      console.error(err)
    }
  }

  const handleGuestForm = async e => {
    try {
      e.preventDefault()
      const body = {
        email: 'demo@demo.com',
        password: 'demo'
      }

      const url = `${window.location.origin}/api/auth/sign-in`
      const params = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
      const res = await fetch(url, params)
      // console.log({ body })
      const { user } = await res.json()

      user && window.location.assign('/profile')
    } catch (err) {
      console.error(err)
    }
  }

  const {
    form: { email, password }
  } = formInput

  return (
    <section className='py-5'>
      <div className='container px-5'>
        <div className='rounded-3 py-5 px-4 px-md-5 mb-5'>
          <div className='text-center mb-5'>
            <h1 className='fw-bolder'>Login</h1>
          </div>
          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-8 col-xl-6'>
              <form onSubmit={handleForm}>
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='email'
                    value={email}
                    className='form-control'
                    type='email'
                    placeholder='name@example.com'
                  />
                  <label htmlFor='inputEmail'>Email address</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='password'
                    value={password}
                    className='form-control'
                    type='password'
                    placeholder='Enter you password'
                  />
                  <label htmlFor='inputPhone'>Password</label>
                </div>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                  <div className='d-flex flex-column'>
                    <Link href='/sign-up'>
                      <a>New Here? Sign Up</a>
                    </Link>
                    <a onClick={handleGuestForm} href='#'>
                      Sign In As Guest
                    </a>
                  </div>
                  <button
                    className='btn-primary btn-lg bg-gradient'
                    type='submit'>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
