import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";




export default function NavBar() {
  return (
      <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg" className="navbar">
        <Container className="d-flex flex-column">
          <Navbar.Brand as={Link} to="/">Grow Garden 101</Navbar.Brand>
          <Nav className="justify-content-center gap-5">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}