import React, { Component }  from 'react';
import './AlinhamentoForm.css';
import inspiracao from '../../img/inspiracao.png';
import viva from '../../img/viva.png';
import impulso from '../../img/impulso.png';
import { Button } from 'react-bootstrap';


function AlinhamentoForm() {
  return (
    <div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p class="explicacao">
            O Instituto Unimed Uberlândia seleciona e acompanha projetos patrocinados via leis de incentivos fiscais nas esferas federal e municipal (Uberlândia/MG), utilizando potencial de renúncia fiscal do Grupo Unimed.
            <br /><br />
            Os projetos aprovados pelos órgãos competentes são analisados, conforme política interna, cabendo ao Conselho de Administração do Instituto Unimed Uberlândia a definição final dos projetos que serão patrocinados. 
          </p>
        </li>
      </ul>
  </div>
  );
};

export default AlinhamentoForm;