import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../CardsConselheirosConsultivo/CardsConselheirosConsultivo.css';
import edvaldo from '../../img/edvaldo.png';
import eliane from '../../img/eliane.png';
import joao from '../../img/joao.png';
import liliana from '../../img/liliana.png';
import raphael from '../../img/raphael.png';

const cardsData = [
  {
    image: edvaldo,
    title: 'Dr. Edvaldo Luiz Junior',
    subtext: 'Angiologista / Cirurgião',
    text: 'Membro do Conselho',
  },
  {
    image: eliane,
    title: 'Dra. Eliane Espíndola',
    subtext: 'Ginecologista e Obstetra',
    text: 'Membro do Conselho',
  },
  {
    image: joao,
    title: 'Dr. João Natal',
    subtext: 'Clínico Geral',
    text: 'Membro do Conselho',
  },
  {
    image: liliana,
    title: 'Dra. Liliana Silva',
    subtext: 'Cirurgiã Geral e do Aparelho Digestivo',
    text: 'Membro do Conselho',
  },
  {
    image: raphael,
    title: 'Dr. Raphael Bettero',
    subtext: 'Mastologista',
    text: 'Membro do Conselho',
  },
];

function CardsConselheirosConsultivo() {
  return (
    <Row xs={1} md={3} className="cardsConselheirosConsultivo">
      {cardsData.map((card, idx) => (
        <Col key={idx} style={{ marginBottom: '20px' }}>
          <Card
            style={{ height: '100%' }}
            className={idx === 3 || idx === 4 ? 'centered-card' : ''}
          >
            <Card.Img
              variant="top"
              src={card.image}
              style={{ width: '100%', height: 'auto', alignSelf: 'center' }}
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
              <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3E554F' }}>
                {card.title}
              </Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#848D8B' }}>{card.subtext}</Card.Text>
              <Card.Text style={{ fontSize: '1rem', color: '#848D8B' }}>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardsConselheirosConsultivo;
