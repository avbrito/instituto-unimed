import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import noticia1 from '../../img/noticia1.png';
import noticia2 from '../../img/noticia2.png';
import noticia3 from '../../img/noticia3.png';
import noticia4 from '../../img/noticia4.png';
import noticia5 from '../../img/noticia5.png';
import noticia6 from '../../img/noticia6.png';
import { CgEnter } from 'react-icons/cg';
import './News.css';

function News() {
  return (
    <div className="text-center" id="newsTop">
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="mb-0">Artigos</h2>
        </Col>
        <Col md={6}>
          <p className="mb-0"><strong>Ver todos</strong></p>
        </Col>
      </Row>
      <div className="container text-center mt-5" id='tabel'>
        <table className="table table-sm">
          <tbody>
            <tr>
              <td>
                <a href="#" id="names" className="list-group-item list-group-item-action" aria-current="true">
                  <small className="text-muted">AUGUST 13, 2021  </small>
                  <h5 className="mb-1">10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h5>
                  <p className="text-muted">Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
                </a>
              </td>
              <td>
                <img src={noticia1} alt="coracao" className="news-image" />
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" id="names" className="list-group-item list-group-item-action">
                <small className="text-muted">AUGUST 13, 2021  </small>
                  <h5 className="mb-1">10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h5>
                  <p className="text-muted">Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
                </a>
              </td>
              <td>
                <img src={noticia2} alt="lapis" className="news-image" />
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" id="names" className="list-group-item list-group-item-action">
                  <small className="text-muted">AUGUST 13, 2021  </small>
                  <h5 className="mb-1">10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h5>
                  <p className="text-muted">Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
                </a>
              </td>
              <td>
                <img src={noticia3} alt="mao" className="news-image" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br /><br /><br />
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="mb-0">Noticias</h2>
        </Col>
        <Col md={6}>
          <p className="mb-0"><strong>Ver todos</strong></p>
        </Col>
      </Row>
      <div className="container text-center mt-5" id='tabel'>
        <table className="table table-sm">
          <tbody>
            <tr>
              <td>
                <a href="#" id="names" className="list-group-item list-group-item-action" aria-current="true">
                <small className="text-muted">AUGUST 13, 2021  </small>
                  <h5 className="mb-1">10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h5>
                  <p className="text-muted">Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
                </a>
              </td>
              <td>
                <img src={noticia4} alt="coracao" className="news-image" />
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" id="names" className="list-group-item list-group-item-action">
                <small className="text-muted">AUGUST 13, 2021  </small>
                  <h5 className="mb-1">10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h5>
                  <p className="text-muted">Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
                </a>
              </td>
              <td>
                <img src={noticia5} alt="lapis" className="news-image" />
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" id="names" className="list-group-item list-group-item-action">
                <small className="text-muted">AUGUST 13, 2021  </small>
                  <h5 className="mb-1">10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h5>
                  <p className="text-muted">Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
                </a>
              </td>
              <td>
                <img src={noticia6} alt="mao" className="news-image" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default News;
