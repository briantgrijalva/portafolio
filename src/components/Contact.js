import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import imgContact from '../assets/contactImg.jpg';
// import imgContact from '../assets/pcAboutOption2.jpg';

const Contact = () => {

    const initialForm = {
        name: '',
        email: '',
        subject: '',
        comments: ''
    }
    const [{name, email, subject, comments}, handleInputChange, reset] = useForm(initialForm);

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || subject === '' || comments === '') {
            Swal.fire('Campos vacios', 'Todos los campos son necesarios', 'warning');
        } else {
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire('Enviado', 'Tu mensaje fue enviado correctamente', 'success');
            }, (error) => {
                console.log(error.text);
                Swal.fire('Algo salió mal', 'Intenta enviar de nuevo tu mensaje', 'error');
            });
            reset(initialForm);

        }
    }

    return ( 
        <Container className='container-contact'>
            
            <Row id='contact'>
                <Col sm>
                    <Form ref={form} onSubmit={handleSubmit}>
                        <Row>
                        <Col>
                            <h5 className='h5-contact-form' >Contact me</h5>
                            <div className='box-contact-form'>

                            </div>
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Floating>
                                    <Form.Control
                                    id="floatingName"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={handleInputChange}
                                    />
                                    <label htmlFor="floatingName">Name</label>
                                </Form.Floating>
                            </Col>
                            <Col>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                    id="floatingEmail"
                                    type="email"
                                    placeholder="name@example.com"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    />
                                    <label htmlFor="floatingEmail">Email</label>
                                </Form.Floating>
                            </Col>
                            
                        </Row>

                        <Form.Floating className="mb-3">
                            <Form.Control
                            id="floatingAsunto"
                            type="text"
                            placeholder="Contactar"
                            name="subject"
                            value={subject}
                            onChange={handleInputChange}
                            />
                            <label htmlFor="floatingAsunto">Subject</label>
                        </Form.Floating>
                        
                        <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-4">
                            <Form.Control
                            as="textarea"
                            placeholder="Comments here"
                            style={{ height: '150px' }}
                            name="comments"
                            value={comments}
                            onChange={handleInputChange}
                            />
                        </FloatingLabel>
                    
                        <Button variant="primary" type="submit" className="btn-submit mb-3">
                            Submit
                        </Button>  
                        
                    </Form>
                </Col>
                <Col sm>
                    <img src={`${imgContact}`} className="img-fluid" alt="..."  />
                </Col>
            </Row>
        </Container>
     );
}
 
export default Contact;