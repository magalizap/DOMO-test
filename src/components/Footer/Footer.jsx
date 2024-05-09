import React from 'react'
import { networks } from '../../utils/Data'
import './footer.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <section id='hireUs' >
      <Container className='content__footer' >
        <Row>
          <Col xs={12} lg={6}> 
            <p className='footer_title'>compleet labs</p>
            <p className='footer_description'>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ur fermentum massa justo sit amet risus. Donec ullamcorper nulla.</p>
            <ul className='contact__container'>
              {networks.map(({icon, path, title}, index) => {
                return (
                  <li key={index} className='network'>
                    <a 
                      href={path}
                      title={title}
                      target='_blank'
                    >{icon}</a>
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col xs={12} lg={6}> 
          <Row >
              <Col xs={4} >
                <Nav >
                  <p  className='footer_title'>SITEMAP</p>
                  <Nav.Link href="#home" className='footer_description link ps-0'>Home</Nav.Link>
                  <Nav.Link href="#technology" className='footer_description link ps-0'>Technology</Nav.Link>
                  <Nav.Link href="#services" className='footer_description link ps-0'>Services</Nav.Link>
                  <Nav.Link href="#about" className='footer_description link ps-0'>About</Nav.Link>
                </Nav>
              </Col>
              <Col xs={4} className='p-25'>
                <p  className='footer_title'>CASE STUDIES</p>
                <p className='footer_description '>Swiss Airlines</p>
                <p className='footer_description'>Google</p>
                <p className='footer_description '>Apple</p>
                <p className='footer_description'>Nike</p>

              </Col>
              <Col xs={4} >
                <p className='footer_title' >CONTACT</p>
                <p className='footer_description'>Jobs</p>
                <p className='footer_description'>Hire us</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer



