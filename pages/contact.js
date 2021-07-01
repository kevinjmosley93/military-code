import React from 'react'

const contact = () => {
  return (
    <section className='py-5'>
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
              <form>
                <div className='form-floating mb-3'>
                  <input
                    className='form-control'
                    id='inputName'
                    type='text'
                    placeholder='Enter your name...'
                  />
                  <label htmlFor='inputName'>Full name</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    className='form-control'
                    id='inputEmail'
                    type='email'
                    placeholder='name@example.com'
                  />
                  <label htmlFor='inputEmail'>Email address</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    className='form-control'
                    id='inputPhone'
                    type='tel'
                    placeholder='(123) 456-7890'
                  />
                  <label htmlFor='inputPhone'>Phone number</label>
                </div>
                <div className='form-floating mb-3'>
                  <textarea
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
        <div className='row gx-5 row-cols-2 row-cols-lg-4 py-5'>
          <div className='col-md-4'>
            <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
              <i className='bi bi-chat-dots'></i>
            </div>
            <div className='h5 mb-2'>Talk to us</div>
            <p className='text-muted mb-0'>
              <span>Email us</span>, we want to hear your stories on how you
              found a job or if you have questions.
            </p>
          </div>
          <div className='col-md-4'>
            <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
              <i className='bi bi-people'></i>
            </div>
            <div className='h5'>Ask the community</div>
            <p className='text-muted mb-0'>
              Explore our community forums and communicate with other users.
            </p>
          </div>
          <div className='col-md-4'>
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

export default contact
