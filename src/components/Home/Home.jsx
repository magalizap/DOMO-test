import React from 'react'
import './home.css'
import Button from 'react-bootstrap/Button';
import { BsArrowRightShort } from "react-icons/bs";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <section id='home' className='content'>
      <Container fluid="md">
      <Row >
        <Col>
        <h1 className='title'>We build beautiful and reliable web solutions</h1>
        <p className='description'>We strongly believe that communication, trust and transparency are the essential elements of successful business relationship.</p>
        <p className='description'>Ready for the journey?</p>
        </Col>
      </Row>
      <Row className='gx-1 mt-2'>
        <Col className='g-3' xs={12} sm={6} md={4} >
          <Button variant="outline-secondary" className='rounded-1'>Learn more</Button>
        </Col>
        <Col className='g-3' xs={12} sm={6} md={8} >
        <Button variant="primary" className='rounded-1'>
          Our projects
          <BsArrowRightShort className='icon'/>
          </Button>
        </Col>
      </Row>
      </Container>
    </section>
  )
}

export default Home
