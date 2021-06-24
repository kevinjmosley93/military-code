import React from 'react'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'

const Header = () => {
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
          fontSize: '1.5rem',
          height: '60px'
        }}>
        <Container className='d-flex flex-md-row'>
          <Navbar.Brand className='p-0 m-0' href='/'>
            {/* <img
              style={{ objectFit: 'contain' }}
              width='100px'
              height='70px'
              margin='0'
              alt='logo'
              src='https://i.imgur.com/Wdpfi2R.png'
            /> */}
            MTC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto text-center d-flex flex-md-row justify-content-around'>
              <Nav.Link className='' href='/about'>
                About
              </Nav.Link>
              <Nav.Link href='/blog'>Blog</Nav.Link>
              <Nav.Link href='/jobs'>Jobs</Nav.Link>
              <Nav.Link href='/resources'>Resources</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Button
                as='a'
                target='_blank'
                href='/contact'
                className='text-light bg-primary bg-gradient rounded'
                variant='info'
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
