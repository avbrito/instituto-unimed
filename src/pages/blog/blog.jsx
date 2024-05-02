import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/blog.css';
import bannerBlog from '../../img/bannerBlog.png';
import Cards from '../../components/Cards/Cards';
import crianca from '../../img/crianca2.png';
import Alinhamento from '../../components/Alinhamento/Alinhamento';
import Formulario from "../../components/Formulario/Formulario";
import Footer from "../../components/Footer/Footer";
import logoBranca from '../../img/logoBranca.png';
import News from "../../components/News/News";

function blog() {
  return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" id="navbar">
            <Container fluid>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Navbar.Brand href="/" id="brand">
                    <img src={logoBranca} style={{width:'100%', marginLeft:'15px'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/Institucional" style={{color: '#fff', marginLeft:'60px', fontWeight:'400'}}>Institucional</Nav.Link>
                    <Nav.Link href="/" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Atuação</Nav.Link>
                    <Nav.Link href="/Blog" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Blog e notícias</Nav.Link>
                    <Nav.Link href="/Formulario" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Incentivos fiscais</Nav.Link>
                    <Nav.Link href="/" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className="parteBranca" style={{alignItems: 'center'}}>
            <div className="banner">
                <img src={bannerBlog} id="imgBanner" />
            </div>
            <News />
                
            </div>
            <br /><br /><br /><br /><br />
            <Footer />
        </div>
  );
}

export default blog;