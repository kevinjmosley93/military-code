import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'

const Services = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }
    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      )
    }
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    const url = '/api/booking'

    const params = {
      method: 'POST'
      // mode: 'no-cors'
    }

    const res = await fetch(url, params)

    const { sessionUrl } = await res.json()

    // console.log(sessionUrl)
    window.location.assign(sessionUrl)
  }

  return (
    <div className='bg-dark text-light'>
      <div className='container  px-4 py-5' id='featured-3'>
        <h2 className='pb-2 text-center'>How We Can Help</h2>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          <div className='feature col-md-4 shadow py-3 border rounded'>
            <div className='feature-icon text-center mb-2'>
              <i className='fa fa-briefcase' aria-hidden='true'></i>
            </div>
            <h2>Find Featured Jobs</h2>
            <p>
              Your first step to finding a job is looking at what there is a
              demand for. Search Jobs in industries that best match your skills.
            </p>
            <Link href='/jobs'>
              <a style={{ margin: '0 auto' }} className='icon-link'>
                View Jobs
              </a>
            </Link>
          </div>
          <div className='feature col-md-4 shadow border rounded py-3'>
            <div className='feature-icon text-center mb-2'>
              <i className='fa fa-users' aria-hidden='true'></i>
            </div>
            <h2>One on One with Veterans</h2>
            <p>
              Book a one on one call with our team to go over your resume,
              digital presence and job interviewing tips that helped them
              succeed after seperation.
            </p>
            <a
              onClick={handleShow}
              style={{ margin: '0 auto', cursor: 'pointer' }}
              className='icon-link'>
              Book Now
            </a>
          </div>
          <div className='feature col-md-4 shadow py-3 border rounded'>
            <div className='feature-icon text-center mb-2'>
              <i className='fa fa-building' aria-hidden='true'></i>
            </div>
            <h2>Find Local Job Centers</h2>
            <p>
              There are 100s of Job Center right in your neighborhood.
              Contacting the centers closest to where you will be getting out is
              the first step to landing a job.
            </p>
            <Link href='/job-centers'>
              <a style={{ margin: '0 auto' }} className='icon-link'>
                View Centers
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={show}
        onHide={handleClose}>
        <Modal.Header className='mx-auto'>
          <Modal.Title className='fw-bolder text-dark'>
            Separation Employment Digtal Footprint -{' '}
            <span className='badge bg-primary rounded-pill'>$50.00</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='lead fw-normal text-dark-50 text-center'>
          This is a one on one 1hr zoom session for us to go over your goals for
          getting out, sharpening your digital footprint with custom Linkedin
          set-up, resume best practices and access to job recruiter resource
          spreadsheets.
        </Modal.Body>
        <Modal.Footer className='d-flex flex-row justify-content-between'>
          <small className='text-center'>
            *Your booking fee serves as a donation to ETV. We appreciate all
            donations and use it to invest into building the platform.
            <br />
            <Link href='/donation-policy'>
              <a
                style={{ margin: '0 auto', fontSize: '.6rem' }}
                className='icon-link'>
                Donation Policy
              </a>
            </Link>
          </small>
          <button
            style={{ cursor: 'pointer' }}
            onClick={handleClose}
            className='btn-primary px-3 rounded'>
            Close
          </button>
          <form onSubmit={handleSubmit}>
            <button type='submit' className='btn-primary px-3 rounded'>
              Book Now
            </button>
          </form>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Services
