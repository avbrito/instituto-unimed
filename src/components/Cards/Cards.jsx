import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Cards/Cards.css';
import coracao from '../../img/coracao.png'
import lapis from '../../img/lapis.png'
import mao from '../../img/mao.png'
import caixa from '../../img/caixa.png'

const cardsData = [
  {
    image: coracao,
    title: 'Saúde',
    text: 'Realização de iniciativas que promovam a saúde, o bem estar físico, mental e/ou social',
  },
  {
    image: lapis,
    title: 'Educação',
    text: 'Desenvolvimento de atividades e construção de parcerias que contribuam com a formação e a sensibilização de crianças, adolescentes e jovens.',
  },
  {
    image: mao,
    title: 'Voluntariado',
    text: 'Cooperados e colaboradores tem a oportunidade de contribuir com a comunidade, se engajando em diversas ações sociais.',
  },
  {
    image: caixa,
    title: 'Incentivos Fiscais',
    text: 'Seleção e acompanhamento de projetos aprovados via leis de incentivo fiscal, além da captação de recursos, potencializando a força coletiva do investimento social.',
  },
];


function Cards() {
  return (
    <Row xs={1} md={4} className="cards">
      {cardsData.map((card, idx) => (
        <Col key={idx} style={{ marginBottom: '20px' }}>
          <Card style={{ height: '100%' }}>
          <Card.Img 
              variant="top" 
              src={card.image} 
              style={{ width: 'auto', height: '100px', alignSelf:'center' }} 
            />
            <Card.Body style={{ display: 'flex', flexDirection: 'column'}}>
              <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color:'#3E554F', textAlign:'center' }}>{card.title}</Card.Title> 
              <Card.Text style={{ fontSize: '1rem', textAlign:'center', color:'#848D8B' }}>{card.text}</Card.Text> 
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;