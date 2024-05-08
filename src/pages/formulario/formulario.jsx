import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/formulario.css';
import banner from '../../img/banner.png';
import CardsInstitucional from '../../components/CardsInstitucional/CardsInstitucional';
import impulso from '../../img/homemimpulso.png';
import Alinhamento from '../../components/Alinhamento/Alinhamento';
import Formulario from "../../components/Formulario/Formulario";
import Footer from "../../components/Footer/Footer";
import logoBranca from '../../img/logoBranca.png';
import AlinhamentoInstitucional from "../../components/AlinhamentoInstituto/AlinhamentoInstituto";
import CardsConselheiros from "../../components/CardsConselheiros/CardsConselheiros";
import CardsConselheirosConsultivo from "../../components/CardsConselheirosConsultivo/CardsConselheirosConsultivo";
import CardsDiretoriaExecutiva from "../../components/CardsDiretoriaExecutiva/CardsDiretoriaExecutiva";
import AlinhamentoForm from "../../components/AlinhamentoForm/AlinhamentoForm";
import FormPart from "../../components/FormParticipar/FormPart";

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
                    <Nav.Link href="/" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Atuação</Nav.Link>
                    <Nav.Link href="/Blog" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Blog e notícias</Nav.Link>
                    <Nav.Link href="/Formulario" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Incentivos fiscais</Nav.Link>
                    <Nav.Link href="/" style={{color: '#fff', marginLeft:'30px', fontWeight:'400'}}>Contato</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className="parteBranca" style={{alignItems: 'center'}}>
                <div class="row m-auto" style={{marginTop:'5%'}}>
                    <div class="col" style={{marginLeft:'10%'}}>
                        <p className="instituto">Programa de Incentivos <br />Fiscais Impulso</p>
                        <br />
                        <AlinhamentoForm />
                    </div>
                    <div class="col-12 col-md-6" style={{marginLeft:'5%'}}>
                        <img src={impulso} id="maos" className="img-fluid" />
                    </div>
                </div>
                <br /><br /><br />
            </div>
            <div className="parteBranca" style={{alignItems: 'center'}}>
                <FormPart />
            </div>
            <br /><br />
            <div className="parteBrancaBorda" style={{alignItems: 'center'}} />
            <Footer />
        </div>
  );
}

export default NavScrollExample;