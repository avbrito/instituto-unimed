import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Cards/Cards.css';
import lupa from '../../img/lupa.png'
import escolha from '../../img/escolha.png'
import responsabilidade from '../../img/responsabilidade.png'

const cardsData = [
  {
    image: lupa,
    title: 'Transparência e Confiança',
    text: 'Promovemos transparência nas operações da organização, o que constrói confiança entre nossa comunidade, parceiros, proponentes, incluindo membros, e sociedade em geral.',
  },
  {
    image: escolha,
    title: 'Tomada de Decisões Eficiente',
    text: 'Ter nossas estratégias bem definidas facilitam a tomada de decisões de forma eficaz e justa, permitindo que a organização responda rapidamente às mudanças do ambiente e aos desafios.',
  },
  {
    image: responsabilidade,
    title: 'Responsabilidade e Sustentabilidade',
    text: 'Garantimos que a organização seja responsável perante seus parceiros e opere de forma sustentável, garantindo sua viabilidade a longo prazo e seu impacto positivo na sociedade.',
  },
];


function Cards() {
  return (
    <Row xs={1} md={3} className="cards">
      {cardsData.map((card, idx) => (
        <Col key={idx} style={{ marginBottom: '20px' }}>
          <Card style={{ height: '100%' }}>
          <Card.Img 
              variant="top" 
              src={card.image} 
              style={{ width: '30%', height: 'auto', alignSelf:'center', marginTop:'10px' }} 
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column'}}>
              <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'semibold', color:'#3E554F', textAlign:'center' }}>{card.title}</Card.Title> 
              <Card.Text style={{ fontSize: '1rem', textAlign:'center', color:'#848D8B' }}>{card.text}</Card.Text> 
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;