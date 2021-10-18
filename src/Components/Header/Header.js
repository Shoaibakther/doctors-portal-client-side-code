import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
       <Navbar bg="dark" variant="dark"  sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Genius</Navbar.Brand>
     <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Technology</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Doctor</Nav.Link>
              {/* {
                user?.email ?
                  <Button onClick={logOut} variant="light">LogOut</Button>:
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
      } */}
      
      <Navbar.Text>
                {/* Signed in as: <a href="#login">{user?.displayName}</a> */}
      </Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;