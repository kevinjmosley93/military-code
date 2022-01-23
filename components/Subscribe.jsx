import React, { useState } from 'react'

const Subscribe = () => {
  const [formInput, setFormInput] = useState({
    form: {
      email: ''
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
      const { email } = formInput.form

      const body = {
        email, 
        type: 'subscribe'
      }

      const url = `${window.location.origin}/api/create-clients`
      const params = {
        method: 'POST',
        body: JSON.stringify(body)
      }
      const res = await fetch(url, params)
      const data = await res.json()
      // console.log(data)
      data &&
        setFormInput({
          form: {
            email: ''
          }
        })
    } catch (err) {
      console.error(err)
    }
  }

  const {
    form: { email }
  } = formInput

  return (
    <section className=' py-5'>
      <h1 className='text-center py-3'>Subscribe</h1>
      <div className='container bg-dark bg-gradient'>
        <div className='p-4 p-sm-5 '>
          <div className='d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start'>
            <div className='mb-4 mb-xl-0'>
              <div className='fs-3 fw-bold text-white'>
                New Jobs and Resources uploaded daily.
              </div>
              <div className='text-white-50'>
                Sign up for our newsletter for the latest updates.
              </div>
            </div>
            <div className='ms-xl-4'>
              <form onSubmit={handleForm} className='input-group mb-2'>
                <input
                  className='form-control'
                  type='text'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  placeholder='Email address...'
                  aria-label='Email address...'
                  aria-describedby='button-newsletter'
                />
                <button
                  className='btn-primary btn-md'
                  id='button-newsletter'
                  type='submit'>
                  Sign up
                </button>
              </form>
              <div className='small text-white-50'>
                We care about privacy, and will never share your data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
