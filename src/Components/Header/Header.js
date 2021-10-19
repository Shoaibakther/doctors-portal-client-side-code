import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Context/useAuth';


import './Header.css'

const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <div>
       <Navbar bg="light" variant="pills" defaultActiveKey="/home" fixed="top"  sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand className="header" href="#home">Cancer institute</Navbar.Brand>
     <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end" id="nav-item">
        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#technology">Technology</Nav.Link>
              <Nav.Link as={HashLink} to="/home#doctor">Doctor</Nav.Link>
              
              {
                user?.email ?
                  <Button className="bg-danger" onClick={logOut} variant="light">LogOut</Button>:
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      
      <Navbar.Text>
                 
               <p><a href="#login">{user?.displayName}</a></p>
                
      </Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;