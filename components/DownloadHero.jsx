import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Container } from 'react-bootstrap'

const DownloadHero = ({ topText, bottomText, btnText }) => {
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
        email
      }

      const url = `${window.location.origin}/api/create-clients`
      const params = {
        method: 'POST',
        body: JSON.stringify(body)
      }
      const res = await fetch(url, params)
      const data = await res.json()
      // console.log(data)
      if(data) {
        setFormInput({
          form: {
            email: ''
          }
        })
        const a = document.createElement("a");
        a.href = '/resume-site.zip';
        a.setAttribute("download", 'resume-site.zip');
        a.click();
      }
        
    } catch (err) {
      console.error(err)
    }
  }

  const {
    form: { email }
  } = formInput





  return (
    <div style={{ height: '75vh' }} className='bg-overlay'>
      <Container className='vertical-center'>
        <div className=' d-flex flex-column justify-content-around px-4 py-2 text-center'>
          <h1 style={{ fontSize: '2.8rem', lineHeight:'1.5' }} className='fw-bold mb-2'>
            {topText}
          </h1>
          <h2 style={{ fontSize: '1.2rem', lineHeight:'1.4' }}>
            {bottomText}
          </h2>
          <div className='d-grid gap-3 d-sm-flex mt-3 justify-content-sm-center'>
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
                  className='btn-primary btn-sm'
                  id='button-newsletter'
                  type='submit'>
                  {btnText}
                </button>
              </form>
              <div className='small text-white-50'>
                * We care about privacy, and will never share your data.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default DownloadHero
