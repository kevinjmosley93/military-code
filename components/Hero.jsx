import React from 'react'
import Link from 'next/link'
import { Button, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className='bg-overlay'>
      <Container className='vertical-center'>
        <div className=' d-flex flex-column justify-content-around px-4 py-2 text-center'>
          <h1 style={{ fontSize: '2rem' }} className='fw-bold mb-2'>
            ETV | Employ The Vets (V.E.T.S - Veterans Equally Trying to Survive)
          </h1>
          <h2 style={{ fontSize: '.8rem', lineHeight:'1.4' }}>
            #1 website for Veterans Looking For Jobs, Civilian Jobs For Veterans, Government Jobs After Military for Veterans, High Paying Jobs For Veterans, Jobs After Leaving The Military, Best Jobs After The Military,	Remote Jobs For Veterans, Work From Home Jobs For Veterans and much more.
          </h2>
          <div className='d-grid gap-3 d-sm-flex mt-3 justify-content-sm-center'>
            <Link href='/about'>
              <Button
                as='a'
                variant='info'
                className=' btn-lg px-4 bg-primary bg-gradient text-light gap-3'>
                What We Do
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Hero
