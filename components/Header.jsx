import React from 'react'
import Image from 'next/image'
import { Nav, Navbar, Button, Container, NavDropdown } from 'react-bootstrap'

import { useUser } from '../lib/hooks'

const Header = () => {
  const user = useUser()

  const signOut = async id => {
    const body = {
      id: id
    }
    // console.log({ body })
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

    window.location.assign('/')
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
          <Navbar.Collapse className='pb-4' id='responsive-navbar-nav'>
            <Nav className='mx-auto text-center text-uppercase bg-dark'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/blog'>Blog</Nav.Link>
              <NavDropdown
                title="Jobs"
              >
                <NavDropdown.Item href='/jobs'>Jobs</NavDropdown.Item>
              <NavDropdown.Item href='/job-centers'>Job Centers</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Free Resources"
              >
                <NavDropdown.Item href='/free-resources/free-resume-website'>Free Resume Website</NavDropdown.Item>
              <NavDropdown.Item href='/free-resources/free-resume-checklist'>Free Resume Checklist</NavDropdown.Item>
              <NavDropdown.Item href='/free-resources/free-linkedin-checklist'>Free LinkedIn Checklist</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='/training-programs'>Training</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              {user && authRoutes}
            </Nav>
            <Nav>
              {user ? (
                <Button
                  onClick={async () => {
                    await signOut(user._id)
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
                  href='/login'
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
