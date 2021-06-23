import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <Container className=' text-light py-4 pt-5'>
        <Row className='mb-5'>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' classname='fw-bold mb-5'>
              ABOUT US
            </h1>
            <p>
              We want to help every seperating veteran secure a job before their ETS date.
            </p>
          </Col>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' classname='fw-bold mb-5'>
              IMPORTANT LINKS
            </h1>
            <ul className='footer-links'>
              <li>
                <a href='/about'>About Us</a>
              </li>
              <li>
                <a href='/blog'>Blog</a>
              </li>
              <li>
                <a href='/resources'>Resources</a>
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
          <Col sm={6} md={3}>
            <h1 id='footer__heading' classname='fw-bold mb-5'>
              LOCATION
            </h1>
            <div>
              {' '}
              <div>Military Then Code</div>
              <div>
                1951 W 21st St <br />
                Broadview, IL 60155
                <br />
                <a href='#'>info@militarythencode.com</a>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3}>
            <h1 id='footer__heading' classname='fw-bold mb-5'>
              CONNECT
            </h1>
            <div className='social-icons d-flex flex-row justify-content-between'>
              <a href='#'>
                <FaFacebookF />
              </a>{' '}
              <a
                target='_blank'
                href='https://www.instagram.com/helpingthehood'>
                <FaInstagram />
              </a>{' '}
              <a target='_blank' href='https://twitter.com/helpingthehood'>
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
            fontWeight: '700'
          }}>
          <p className='text-center py-3 text-light mb-0'>
            {new Date().getFullYear()} All Rights Reserved | MTC - Military Then Code™
          </p>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer
