import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import img from '../assets/pcAboutOption2.jpg';
import img from '../assets/briant.png';

const About = () => {
    return ( 
    <Container>
        
        <Row id='about'>
            <Col xs={6}>
                <div className='name-div'>
                    <h1 className='p-title'>Briant Grijalva.</h1>
                    {/* <br /> */}
                    <p className='span-title'>Web Developer.</p>
                    {/* <p className='p-subtitle'><i style={{verticalAlign:'middle'}} className="fa-solid fa-envelope"></i>briantgrijalva20@gmail.com</p> */}
                </div>
                
                <div className='social-div'>
                    <a className='a-icon-social' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/briantgrijalva/'><i className="fab fa-linkedin" ></i></a> <a className='a-icon-social' target='_blank' rel='noreferrer' href='https://github.com/briantgrijalva'><i className="fab fa-github"></i></a> <a className='a-icon-social' target='_blank' rel='noreferrer' href='https://www.instagram.com/briantgrijalva/'><i className="fab fa-instagram-square"></i></a>
                </div>

                
            </Col>
            <Col xs={6}>
                <img src={`${img}`} className="img-fluid img-about" alt="..."/>
            </Col>
        </Row>

       
        <Row id='skills'>
            
            <Col xs={{ order: 'first' }} md={2} lg={4}></Col>
            <Col xs md={8} lg={6}>
                <h5 className='h5-about'>About me</h5>
                <div className='box'>

                </div>
                <div className='box-about'>
                    <p>I studied systems engineering in 2016, I have created video games <span className='p-tech'>(Unity C#)</span> and development of web applications, mainly using <span className='p-tech'>MERN Stack (MongoDB, Express, React JS, Node JS)</span> also <span className='p-tech'>TypeScript</span> & <span className='p-tech'>Redux</span>.</p>
                </div>
            </Col>
            <Col xs={{ order: 'last' }} md={2} lg={2}></Col>
        </Row>

    </Container>
     );
}
 
export default About;