import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
// import img from '../assets/me.png';
import img from '../assets/logo.svg';

export const Footer = () => {
  return (
    <Container className='container-footer'>
            <Row>
                <Col xs={{ order: 'first' }} md={4}>
                  <div className='social-footer'>
                    <div className='social-footer'> <a className='a-icon-social' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/briant-grijalva-0b5a76156'><i className="fab fa-linkedin" ></i>Linkedin </a></div><br />
                    <div className='social-footer'> <a className='a-icon-social' target='_blank' rel='noreferrer' href='https://github.com/briantgrijalva'> <i className="fab fa-github"></i> Github</a> </div><br />
                    <div className='social-footer'> <a className='a-icon-social' target='_blank' rel='noreferrer' href='https://www.instagram.com/briantgrijalva/'><i className="fab fa-instagram-square"></i> Instagram </a></div><br />
                  </div>
                 
                </Col>
                <Col xs md={4}>
                    
                
                </Col>
                <Col xs={{ order: 'last' }} md={4}>
                  <img src={`${img}`} className="img-fluid img-footer" alt="..."/>
                </Col>
            </Row>
    </Container>
  )
}
