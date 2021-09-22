import React, { useState } from 'react'
import { NextSeo } from 'next-seo'

const Contact = () => {
  const [formInput, setFormInput] = useState({
    form: {
      fullName: '',
      email: '',
      phone: '',
      message: ''
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
      const { fullName, email, phone, message } = formInput.form

      const body = {
        fullName,
        email,
        phone,
        message
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
            fullName: '',
            email: '',
            phone: '',
            message: ''
          }
        })
    } catch (err) {
      console.error(err)
    }
  }

  const {
    form: { fullName, email, phone, message }
  } = formInput

  return (
    <section className='py-5'>
      <NextSeo
        title='Contact ETV'
        description='Contact Us to setup a One on One with veterans that have found high paying careers after getting out of the military.'
      />
      <div className='container px-5'>
        <div className='rounded-3 py-5 px-4 px-md-5 mb-5'>
          <div className='text-center mb-5'>
            <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
              <i className='bi bi-envelope'></i>
            </div>
            <h1 className='fw-bolder'>Get in touch</h1>
            <p className='lead fw-normal text-muted mb-0'>
              We'd love to hear from you
            </p>
          </div>
          <div className='row gx-5 justify-content-center'>
            <div className='col-lg-8 col-xl-6'>
              <form onSubmit={handleForm}>
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='fullName'
                    value={fullName}
                    className='form-control'
                    id='inputName'
                    type='text'
                    placeholder='Enter your name...'
                  />
                  <label htmlFor='inputName'>Full name</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='email'
                    value={email}
                    className='form-control'
                    id='inputEmail'
                    type='email'
                    placeholder='name@example.com'
                  />
                  <label htmlFor='inputEmail'>Email address</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    onChange={handleChange}
                    name='phone'
                    value={phone}
                    className='form-control'
                    id='inputPhone'
                    type='tel'
                    placeholder='(123) 456-7890'
                  />
                  <label htmlFor='inputPhone'>Phone number</label>
                </div>
                <div className='form-floating mb-3'>
                  <textarea
                    onChange={handleChange}
                    name='message'
                    value={message}
                    className='form-control'
                    id='inputMessage'
                    type='text'
                    placeholder='Enter your message here...'
                    style={{ height: '10rem' }}></textarea>
                  <label htmlFor='inputMessage'>Message</label>
                </div>
                <div className='d-flex flex-row justify-content-center'>
                  <button
                    className='btn-primary btn-lg bg-gradient'
                    type='submit'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='row mx-auto py-5'>
          <div className='col-md-6'>
            <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
              <i className='bi bi-chat-dots'></i>
            </div>
            <div className='h5 mb-2'>Talk to us</div>
            <p className='text-muted mb-0'>
              <span>Email us</span>, we want to hear your stories on how you
              found a job or if you have questions.
            </p>
          </div>
          <div className='col-md-6'>
            <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
              <i className='bi bi-people'></i>
            </div>
            <div className='h5'>Ask the community</div>
            <p className='text-muted mb-0'>
              Explore our community forums and communicate with other users.
            </p>
          </div>
          <div className='col-md-12 text-md-center'>
            <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
              <i className='bi bi-question-circle'></i>
            </div>
            <div className='h5'>Support center</div>
            <p className='text-muted mb-0'>
              Our resources not enough? Inquire about booking a 1 on 1 with one
              of the veterans in our network!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
