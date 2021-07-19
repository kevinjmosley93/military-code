import React, { useContext } from 'react'
import Image from 'next/image'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'

import { useUser } from '../lib/hooks'

const Header = () => {
  const user = useUser()

  const signOut = async id => {
    const body = {
      id: id
    }
    const url = `${window.location.origin}/api/auth/sign-out`
    const params = {
      method: 'POST',
      body: JSON.stringify(body)
    }
    const res = await fetch(url, params)

    console.log({ body })

    const { message, success } = await res.json()

    if (success) return window.location.assign('/')
  }
  return (
    <>
      <Navbar
        sticky='top'
        collapseOnSelect
        expand='md'
        variant='dark'
        className='bg-dark'
        style={{
          fontWeight: '700',
          padding: '0',
          fontSize: '1rem'
        }}>
        <Container className='d-flex flex-md-row'>
          <Navbar.Brand href='/'>
            <Image
              width={100}
              height={60}
              alt='logo'
              src='https://i.imgur.com/fAo3uvq.png'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto text-center bg-dark'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              {/* <Nav.Link href='/blog'>Blog</Nav.Link> */}
              <Nav.Link href='/jobs'>Jobs</Nav.Link>
              <Nav.Link href='/training-programs'>Training</Nav.Link>
              <Nav.Link href='/job-centers'>Job Centers</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <Button
                  onClick={async () => {
                    await signOut(user.id)
                  }}
                  href='#'
                  as='a'
                  className='text-light bg-primary bg-gradient rounded mb-2'
                  variant='primary'
                  size='md'>
                  Log out
                </Button>
              ) : (
                <Button
                  href='#'
                  as='a'
                  className='text-light bg-primary bg-gradient rounded mb-2'
                  variant='primary'
                  size='md'>
                  Log in
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
