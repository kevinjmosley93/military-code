import React, { useContext } from 'react'
import Image from 'next/image'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'
import { JobContext } from '../contexts/JobContext'

const Header = () => {
  const { user } = useContext(JobContext)

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
          fontSize: '1.5rem'
        }}>
        <Container className='d-flex flex-md-row'>
          <Navbar.Brand href='/'>
            <Image
              width={100}
              height={65}
              alt='logo'
              src='https://i.imgur.com/fAo3uvq.png'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto text-center bg-dark'>
              <Nav.Link href='/about'>About</Nav.Link>
              {/* <Nav.Link href='/blog'>Blog</Nav.Link> */}
              <Nav.Link href='/jobs'>Jobs</Nav.Link>
              <Nav.Link href='/training-programs'>Training</Nav.Link>
              <Nav.Link href='/job-centers'>Job Centers</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Button
                  onClick={async () => {
                    const url = 'http://localhost:3000/auth/sign-out'
                    const headers = new Headers()

                    const params = {
                      method: 'DELETE',
                      headers: headers.set(
                        'Authorization',
                        `Bearer ${user.token}`
                      )
                    }
                    const res = await fetch(url, params)

                    const data = await res.json()
                    console.log({ data })
                  }}
                  as='a'
                  className='text-light bg-primary bg-gradient rounded mb-2'
                  variant='primary'
                  size='lg'>
                  Log Out
                </Button>
              )}
              <Button
                as='a'
                href='/contact'
                className='text-light bg-primary bg-gradient rounded mb-2'
                variant='primary'
                size='lg'>
                Contact
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
