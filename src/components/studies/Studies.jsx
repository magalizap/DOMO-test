import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { cardFooterInfo, studiesCase } from '../../utils/Data'
import './studies.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Studies = () => {
  return (
    <section id='caseStudies' className='studies__container'>
      <p className='case_title'>CLIENTS WE WORKED WITH</p>
      <ul className='studies__logos'>
      {studiesCase.map(({img, alt}, index) => {
        return(
         <li key={index} >
           <img src={img} alt={alt} className='logo'/>
         </li>
        )
      })}
      </ul>


        <Container>
          <Row className='g-3 direction_text'>
              {cardFooterInfo.map(({title, description, buttonText, img}, index) => {
                return (
                  <Col xs={12} md={6} key={index}>
                    <Card className='card__studies rounded-1' >
                      <Card.Body className='content_text'>
                        <Row>
                          <Col  md={6} lg={8}>
                            <Card.Title className='skill_title'>{title}</Card.Title>
                            <Card.Text className='skill_description'>
                              {description}
                            </Card.Text>
                            <Button variant="outline-light" size="lg"className='button_card top rounded-1'>{buttonText}</Button>
                          </Col>

                          {
                            img && 
                            <Col className=' image'>
                              <Image src={img} alt='' className='phone_img'  rounded /> 
                            </Col>
                          }

                        </Row>
                      </Card.Body>

                    </Card>
                  </Col>
                )
              })}


          </Row>
        </Container>


    </section>
  )
}

export default Studies