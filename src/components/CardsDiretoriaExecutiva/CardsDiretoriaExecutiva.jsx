import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../CardsDiretoriaExecutiva/CardsDiretoriaExecutiva.css';
import francisco from '../../img/francisco.png';
import livia from '../../img/livia.png';

const cardsData = [
  {
    image: francisco,
    title: 'Francisco Tavares',
    subtext: 'Diretor Superintendente',
    text: 'Unimed',
  },
  {
    image: livia,
    title: 'Lívia Mendes de Paula',
    subtext: 'Diretora Superintendente',
    text: 'Uni Participações',
  }
];

function CardsDiretoriaExecutiva() {
  return (
    <Row xs={1} md={2} className="CardsDiretoriaExecutiva">
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
}

export default CardsDiretoriaExecutiva;
