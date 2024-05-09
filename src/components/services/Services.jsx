import React from 'react'
import './services.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cardInfo } from '../../utils/Data';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = () => {
  return (
    <section id='services' className='d-flex justify-content-center align-items-center flex-column'>
        <h3 className='title'>Our Services</h3>
        <p className='description text-center service_text'>We feel very strong about our skills when it comes to planning, designing and coding applications. Here is what we love to do!</p>
        <Container>
            <Row className='g-3'>
                {
                cardInfo.map(({icon, title, description}, index) => {
                    return(
                        <Col xs={12} md={6} lg={4} key={index}>
                            <Card   className=' rounded-1 text-center p-4'>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className='circle_icon'>
                                {icon}
                                </div>
                                
                            </div>
                            <Card.Body>
                                <Card.Title className='card_title'>{title}</Card.Title>
                                <Card.Text className='card_description'>
                                {description}
                                </Card.Text>
                                <Button variant="outline-secondary" size="lg" className='button_card rounded-1'>Learn more</Button>
                            </Card.Body>
                            </Card>
                        </Col>

                    )
                })
            }

            </Row>
        </Container>


    </section>
  )
}

export default Services




 