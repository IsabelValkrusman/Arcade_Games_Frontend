import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({ userInfo, logoutHandler }) => {
  const linkStyle = {
    fontSize: '1.5em', // Suur teksti suurus
    color: '#ffffff',   // Värv
  };

  return (
    <header style={{ backgroundColor: "#900C3F " }}>
      <Navbar style={{backgroundColor: '	#800020 ', border: "none" }} variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: '28px', color: '#542010', fontFamily: 'Impact, sans-serif', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '40px', fontWeight: 'bold', color: '#ffffff' }}>HALINGA RESTORAN</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mx-auto'>
              <LinkContainer to='/' style={{ fontSize: '25px', color: '#ffffff',  fontFamily: 'system-ui', fontWeight: 'bold' }}>
                <Nav.Link style={linkStyle}>
                  Esileht
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/food' style={{ fontSize: '25px', color: '#ffffff',  fontFamily: 'system-ui', fontWeight: 'bold' }}>
                <Nav.Link style={linkStyle}>
                  Toitlustus
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/party' style={{ fontSize: '25px', color: '#ffffff',  fontFamily: 'system-ui', fontWeight: 'bold' }}>
                <Nav.Link style={linkStyle}>
                  Üritused
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/group' style={{ fontSize: '25px', color: '#ffffff',  fontFamily: 'system-ui', fontWeight: 'bold' }}>
                <Nav.Link style={linkStyle}>
                  Gruppimenüü
                </Nav.Link>
              </LinkContainer>
               
              <LinkContainer to='/arcade' style={{ fontSize: '25px', color: '#ffffff' , fontFamily: 'system-ui', fontWeight: 'bold' }}>
                <Nav.Link style={linkStyle}>
                  Mänguaparaadid
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
