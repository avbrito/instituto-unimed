import React, { Component }  from 'react';
import './AlinhamentoInstituto.css';
import inspiracao from '../../img/inspiracao.png';
import viva from '../../img/viva.png';
import impulso from '../../img/impulso.png';
import { Button } from 'react-bootstrap';


function AlinhamentoInstitucional() {
  return (
    <div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p class="explicacao">
            Fundado em 2023, o Instituto Unimed Uberlândia é uma associação sem fins lucrativos, que busca cuidar da comunidade de forma sustentável, oferecendo oportunidades de desenvolvimento humano. A criação do Instituto reforça o compromisso do grupo Unimed com os objetivos do desenvolvimento sustentável e a execução das melhores práticas de ESG.​
            <br /><br />
            Saúde, em seu sentido mais amplo, é o que norteia as iniciativas do Instituto Unimed Uberlândia. Nessa perspectiva, o Instituto também desenvolverá iniciativas nas frentes de educação e voluntariado. Ainda há o patrocínio de projetos culturais e esportivos, por meio da utilização das leis de incentivo fiscal nas esferas federal e municipal.
          </p>
        </li>
      </ul>
  </div>
  );
};

export default AlinhamentoInstitucional;