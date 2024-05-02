import React, { Component }  from 'react';
import './Formulario.css';
import inspiracao from '../../img/inspiracao.png';
import viva from '../../img/viva.png';
import impulso from '../../img/impulso.png';
import { Button } from 'react-bootstrap';


function Formulario() {
  return (
    <div id="formulario">
        <p id="contact">Contato</p>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Nome</label>
            <input type="text" class="form-control" placeholder="" aria-label="Username" id="borda-inferior"></input>
        </div>
      <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Seu E-mail</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com" id="borda-inferior"/>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" id="bordaCaixa"></textarea>
        </div>
        <div class="btnVerde">
            <Button id="envie">Enviar Mensagem</Button>
        </div>
  </div>
  );
};

export default Formulario;