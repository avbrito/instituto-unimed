import React, { Component }  from 'react';
import './Alinhamento.css';
import inspiracao from '../../img/inspiracao.png';
import viva from '../../img/viva.png';
import impulso from '../../img/impulso.png';
import { Button } from 'react-bootstrap';


function Alinhamento() {
  return (
    <div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <img src={inspiracao} id="inspiracao" />
          <p class="explicacao">Programa que busca contribuir com a formação <br /> de crianças e adolescentes e jovens, por meio de <br /> atividades e iniciativas educacionais, que gerem <br /> oportunidades de desenvolvimento.</p>
        </li>
        <li class="list-group-item">
          <img src={viva} id="viva" />
          <p class="explicacao">O Programa VIVA, Voluntariado Impactando Vidas <br /> e Ações, tem como foco estimular a participação <br /> de cooperados e colaboradores em inicativas <br /> sociaos estruturadas, buscando a tranformação <br /> da comunidade.</p>
        </li>
        <li class="list-group-item">
          <img src={impulso} id="impulso" />
          <p class="explicacao">Programa de incentivos fiscais e captação de <br /> recursos, que busca potencializar a força do <br /> investimento social coletivo, por meio do <br /> patrocínio de projetos culturais e esportivos.</p>
          <br />
          <Button id="clique">CLIQUE AQUI E SAIBA COMO SEU <br />PROJETO PODE SER PATROCINADO.</Button>
        </li>
      </ul>
  </div>
  );
};

export default Alinhamento;