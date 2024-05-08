import React, { Component }  from 'react';
import { FaPhoneAlt, FaInstagram  } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import './Footer.css';
import logoVazio from '../../img/logoVazio.png';


function Footer() {
  return (
        <div>
            <footer class="bg-body-tertiary text-center text-lg-start" id="ftr">
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <img src={logoVazio} />
                        </div>
                        <div class="col-lg-3 col-md-12 mb-4 mb-md-0">
                            <p>
                                <a href='/Institucional' style={{textDecoration: 'none', color:'#848D8B'}}>Institucional</a>
                            </p>
                            <p>
                                <a href='#' style={{textDecoration: 'none', color:'#848D8B'}}>Atuação</a>
                            </p>
                            <p>
                                <a href='/Blog' style={{textDecoration: 'none', color:'#848D8B'}}>Blog e Notícias</a>
                            </p>
                            <p>
                                <a href='/Formulario' style={{textDecoration: 'none', color:'#848D8B'}}>Incentivos Fiscais</a>
                            </p>
                        </div>
                        <div class="col-lg-3 col-md-12 mb-4 mb-md-0">
                            <h5 style={{color:'#3E554F'}}>Contato</h5>
                            <p>
                                <a href='#' style={{textDecoration: 'none', color:'#848D8B'}}>Av. João Pinheiro, 639  Centro.</a>
                            </p>
                            <p>
                                <a href='#' style={{textDecoration: 'none', color:'#848D8B'}}><FaPhoneAlt id="phone"/> (34) 99876-0506</a>
                            </p>
                            <p>
                                <a href='#' style={{color:'#2CBC95'}}>contato@institutounimeduberlandia.coop.br</a>
                            </p>
                            <p>
                                <a href='#' style={{textDecoration: 'none'}}><FaLinkedinIn id="linkedin"/> <FaInstagram id="instagram"/></a>
                            </p>
                            <p>
                                <a href='#' style={{textDecoration: 'none', color:'#2CBC95'}}>Grupo Unimed Uberlândia</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
    </div>



  );
};

export default Footer;