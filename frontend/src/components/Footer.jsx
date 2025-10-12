import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define styles
  const footerStyle = {
    backgroundColor: '#800020',
    color: 'black',
    padding: '1rem 0',
  };

  const textStyle = {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '20px',
  };

  const iconStyle = {
    color: '#ffffff',
    margin: '0 10px',
    fontSize: '1.5rem',
    cursor: 'pointer',
  };

  // TripAdvisor logo component
  const TripAdvisorLogo = () => {
    const logoStyle = {
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      fontSize: '24px',
      color: '#00B140', // TripAdvisor green color
      fontWeight: 'bold',
      cursor: 'pointer',
    };

    const owlStyle = {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      backgroundColor: '#00B140',
      position: 'relative',
      marginRight: '5px',
    };

    const eyeStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: 'white',
      position: 'absolute',
    };

    return (
      <a
        href="https://www.tripadvisor.com/Restaurant_Review-g19141528-d15026826-Reviews-Halinga_Restoran-Loomse_Parnu_County.html"
        target="_blank"
        rel="noopener noreferrer"
        style={logoStyle}
      >
        <div style={owlStyle}>
          <div style={{ ...eyeStyle, left: '7px', top: '7px' }}></div>
          <div style={{ ...eyeStyle, right: '7px', top: '7px' }}></div>
        </div>
        <span>TripAdvisor</span>
      </a>
    );
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left py-3">
           
            <p style={textStyle}>Halinga Kohvik OÜ &copy; {currentYear}</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-right py-3">
            <p style={textStyle}>R - P: 11:00 - 18:00;</p>
            <p style={textStyle}>e-mail: halingarestoran@gmail.com</p>
            <p style={textStyle}>Telefon: +372 5623 3132</p>
            <div>
              <a href="https://www.facebook.com/HalingaRestoran" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
              </a>
              <a href="https://www.instagram.com/HalingaRestoran" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
              </a>
                
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
