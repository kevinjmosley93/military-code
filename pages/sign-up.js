import React, { useState } from 'react'

const SignUp = () => {
  const [formInput, setFormInput] = useState({
    form: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      jobSeeker: true
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
      const {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        jobSeeker
      } = formInput.form

      const body = {
        email,
        password,
        passwordConfirm,
        jobSeeker,
        firstName,
        lastName
      }

      const url = `${window.location.origin}/api/auth/sign-up`
      const params = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
      const res = await fetch(url, params)
      const { success } = await res.json()
      console.log(success)
      success &&
        setFormInput({
          form: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            jobSeeker: true
          }
        })
      success && window.location.assign('/login')
    } catch (err) {
      console.error(err)
    }
  }

  const {
    form: { firstName, lastName, email, password, passwordConfirm }
  } = formInput

  return (
    <section className='py-5'>
      <div className='container px-5'>
        <div className='rounded-3 py-5 px-4 px-md-5 mb-5'>
          <div className='text-center mb-5'>
            <h1 className='fw-bolder'>Sign-Up</h1>
          </div>
          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-8 col-xl-6'>
              <form onSubmit={handleForm}>
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='firstName'
                    value={firstName}
                    className='form-control'
                    type='text'
                    placeholder='Enter your first name...'
                  />
                  <label htmlFor='inputName'>First name</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='lastName'
                    value={lastName}
                    className='form-control'
                    type='text'
                    placeholder='Enter your last name...'
                  />
                  <label htmlFor='inputName'>Last name</label>
                </div>
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
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='passwordConfirm'
                    value={passwordConfirm}
                    className='form-control'
                    type='password'
                    placeholder='Confirm your password'
                  />
                  <label htmlFor='inputPhone'>Confirm you password</label>
                </div>
                <div className='d-flex flex-row justify-content-center'>
                  <button
                    className='btn-primary btn-lg bg-gradient'
                    type='submit'>
                    Sign Up
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

export default SignUp
