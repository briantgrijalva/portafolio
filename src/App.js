import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from "./components/About";
import Contact from "./components/Contact";
import NavbarComponent from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Footer } from './components/Footer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <main>
        <NavbarComponent />
        <Container>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </Container>
    </main>
  );
}

export default App;
