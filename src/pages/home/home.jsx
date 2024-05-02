import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/home.css';
import banner from '../../img/banner.png';
import Cards from '../../components/Cards/Cards';
import crianca from '../../img/crianca2.png';
import Alinhamento from '../../components/Alinhamento/Alinhamento';
import Formulario from "../../components/Formulario/Formulario";
import Footer from "../../components/Footer/Footer";
import logoBranca from '../../img/logoBranca.png';

function NavScrollExample() {
    
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
                    <Nav.Link href="#action2" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Atuação</Nav.Link>
                    <Nav.Link href="/Blog" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Blog e notícias</Nav.Link>
                    <Nav.Link href="/Formulario" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Incentivos fiscais</Nav.Link>
                    <Nav.Link a href="#contato" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className="parteBaixo">
            <div className="banner">
                <img src={banner} id="imgBanner" />
            </div>
                <p className="nasce">Nascemos para cuidar</p>
                <p className="textFirst">Saúde, em seu sentido mais amplo, é o qe norteia as iniciativas do Instituto Unimed Uberlândia.<br /> Uma associação sem fins lucrativos, que busca cuidar da comunidade de forma sustentavel, oferecendo oportunidades de desenvolvimento humano. <br />Por isso, os programas e projetos desenvolvidos ou apoiados pelo instituto Unimed, dialogam com as seguintes frentes da atuação. </p>
                <Cards />
                <br /><br /><br />
            </div>
            <div className="parteBranca" style={{alignItems: 'center'}}>
                <div class="row m-auto" style={{marginTop:'5%'}}>
                    <div class="col" style={{marginLeft:'15%'}}>
                        <img src={crianca} id="crianca" />
                    </div>
                    <div class="col">
                        <p className="programas">Programas que</p>
                        <p className="transformam">Transformam Vidas</p>
                        <br />
                        <Alinhamento />
                    </div>
                </div>
                <br /><br /><br id="contato"/>
                <Formulario />
            </div>
            <br /><br /><br /><br /><br />
            <Footer />
        </div>
  );
}

export default NavScrollExample;