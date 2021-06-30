import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className='bg-overlay'>
      <Container className='vertical-center'>
        <div className=' d-flex flex-column justify-content-around px-4 py-2 text-center'>
          <h1 style={{ fontSize: '2rem' }} className='fw-bold mb-2'>
            MTC | Military Then Code
          </h1>
          <p style={{ fontSize: '1rem' }}>
            We are the #1 resource center and job board for separating military
            personnel.
          </p>
          <div className='d-grid gap-3 d-sm-flex mt-3 justify-content-sm-center'>
            <Button
              as='a'
              variant='info'
              href='/about'
              className=' btn-lg px-4 bg-primary bg-gradient text-light gap-3'>
              What We Do
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Hero
