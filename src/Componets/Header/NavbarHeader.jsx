import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavbarHeader() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-center flex' />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto ">
            <Link to='/' className='p-4 font-bold  fs-4'>Home</Link>
            <Link to='/registerPage' className='p-4 font-bold  fs-4 '>Sing In</Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default NavbarHeader;
