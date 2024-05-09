import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg" variant='dark'>
      <Container>

        <Navbar.Brand href="#home">Compleet labs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#technology">Technology</Nav.Link>
            <Nav.Link href="#caseStudies">Case studies</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#hireUs">Hire us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;