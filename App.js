import React, { useEffect, useState } from 'react';
import './App.css';
import Top from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Lol from './components/promo'
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import Cards from './components/cards';

function App() {
  
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () =>  setOffsetY(window.pageYOffset)
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
        <div className="App">
              <Row>
                <Col className="Left" style={{transform: `translateY(${ offsetY * 0.4}px)` }}>
                </Col>
                <Col xs={7} className='Main'>
                  <Top/>
                  <Lol/>
                  <Cards/>
                </Col>
                <Col className='Left' style={{transform: `translateY(${ offsetY * 0.4}px)` }}>
                </Col>
              </Row>
        </div>
  );
}

export default App;
