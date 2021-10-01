import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Modal } from 'react-bootstrap'

const PreSale = () => {
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

    const url = '/api/preorder'

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
    <div id='presale' className=' px-4 py-5 '>
      <div className='text-center'>
        <h1 className='display-5 fw-bold'>
          Need a Step by Step guide for separation from the military?
        </h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>
            This course is for those who want the blueprint to a perfect
            transion into a career when leaving the military.{' '}
          </p>
          <iframe
            className='mb-5 w-100'
            height='315'
            src='https://www.youtube.com/embed/6G-QUfR6cxc'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
          <a
            onClick={handleShow}
            style={{ margin: '0 auto', cursor: 'pointer', fontSize: '2.25rem' }}
            className='icon-link text-light btn btn-lg bg-primary w-100'>
            LEARN MORE
          </a>
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
            50% off PREORDER - Keys to Finding a Post Military Career Course -{' '}
            <span className='badge bg-primary rounded-pill'>$24.99</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='lead fw-normal text-dark-50 text-left'>
          <h3>PREORDER NOW AT HALF PRICE AND BE THE FIRST TO GET THE COURSE</h3>
          <ul>
            <li>
              Step by step guide to showing you what you need to find a job
              before you get out of the military.
            </li>
            <li>Finding a career path</li>
            <li>Creating a LinkedIn</li>
            <li>Building a Resume</li>
            <li>Applying for jobs</li>
            <li>Building a Network</li>
            <li>Mindset</li>
          </ul>
        </Modal.Body>
        <Modal.Footer className='d-flex flex-row justify-content-between'>
          <small className='text-center'>
            *Your preorder fee serves as a donation to ETV. We appreciate all
            donations and use it to invest into building the platform & helping
            more veterans.
            <br />
            <Link href='/donation-policy'>
              <a
                target='_blank'
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
              PREORDER NOW
            </button>
          </form>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PreSale
