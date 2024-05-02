import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../CardsConselheiros/CardsConselheiros.css';
import marcelo from '../../img/marcelo.png'
import gustavo from '../../img/gustavo.png'
import gobbo from '../../img/gobbo.png'

const cardsData = [
  {
    image: marcelo,
    title: 'Dr. Marcelo Sinício',
    subtext: 'Pediatra',
    text: 'Presidente do Conselho', 
  },
  {
    image: gustavo,
    title: 'Dr. Gustavo Brandão',
    subtext: 'Ortopedista e Traumatologista',
    text: 'Membro do Conselho',
  },
  {
    image: gobbo,
    title: 'Dr. Marcelo Gobbo',
    subtext:  'Médico de Família',
    text: 'Membro do Conselho',
  },
];


function Cards() {
  return (
    <Row xs={1} md={3} className="cardsConselheiros">
      {cardsData.map((card, idx) => (
        <Col key={idx} style={{ marginBottom: '20px' }}>
          <Card style={{ height: '100%' }} id='cardConselheiros'>
          <Card.Img 
              variant="top" 
              src={card.image} 
              style={{ width: '100%', height: 'auto', alignSelf:'center' }} 
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column'}}>
              <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color:'#3E554F'}}>{card.title}</Card.Title> 
              <Card.Text style={{ fontSize: '1rem', color:'#848D8B' }}>{card.subtext}</Card.Text>
              <Card.Text style={{ fontSize: '1rem', color:'#848D8B' }}>{card.text}</Card.Text> 
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;