import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-dark pt-5'>
      <Container className=' text-light'>
        <Row className='mb-5'>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' className='fw-bold mb-3'>
              ABOUT US
            </h1>
            <p>
              We want to help every separating veteran secure a job before their
              separation date.
            </p>
          </Col>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' className='fw-bold mb-3'>
              LINKS
            </h1>
            <ul className='footer-links'>
              <li>
                <a href='/about'>About Us</a>
              </li>
              {/* <li>
                <a href='/blog'>Blog</a>
              </li> */}
              <li>
                <a href='/jobs'>Jobs</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='/donation-policy'>Donation Policy</a>
              </li>
              <li>
                <a href='/contact'>Contact us</a>
              </li>
            </ul>
          </Col>
          <Col className='mb-3' sm={6} md={3}>
            <h1 id='footer__heading' className='fw-bold mb-3'>
              CONTACT
            </h1>
            <div>
              {' '}
              <div>
                ETV | Employ The V.E.T.S - Veterans Equally Trying To Survive
              </div>
              <a rel='noreferrer' href='mailto:employthevets@gmail.com'>
                info@employthevets.com
              </a>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' className='fw-bold '>
              CONNECT
            </h1>
            <div className='social-icons d-flex flex-row justify-content-between'>
              <a href='#'>
                <FaFacebookF />
              </a>{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/helpingthehood'>
                <FaInstagram />
              </a>{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://twitter.com/helpingthehood'>
                <FaTwitter />
              </a>
              <a href='#'>
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
        <Container
          style={{
            height: 'auto',
            margin: '0 auto',
            fontSize: '.6rem'
          }}>
          <p className='text-center py-3 text-light mb-0'>
            {new Date().getFullYear()} All Rights Reserved | ETV - Employ The
            V.E.T.S™
          </p>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer
