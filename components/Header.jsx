import React from 'react'
import Image from 'next/image'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'

import { useUser } from '../lib/hooks'

const Header = () => {
  const user = useUser()

  const signOut = async id => {
    const body = {
      id: id
    }
    console.log({ body })
    const url = `${window.location.origin}/api/auth/sign-out`
    const params = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
    const res = await fetch(url, params)
    if (!res) return

    const { success, msg } = await res.json()

    if (!success) return

    if (msg === 'user signed out' && success) return window.location.assign('/')
  }

  const authRoutes = <Nav.Link href='/profile'>Profile</Nav.Link>
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
              <Nav.Link href='/jobs'>Jobs</Nav.Link>
              <Nav.Link href='/training-programs'>Training</Nav.Link>
              <Nav.Link href='/job-centers'>Job Centers</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              {user && authRoutes}
            </Nav>
            <Nav>
              {user ? (
                <Button
                  onClick={async () => {
                    await signOut(user.id)
                  }}
                  href='#'
                  as='a'
                  className='text-light bg-primary bg-gradient rounded'
                  variant='primary'
                  size='md'>
                  Log out
                </Button>
              ) : (
                <Button
                  href='login'
                  as='a'
                  className='text-light bg-primary bg-gradient rounded'
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
