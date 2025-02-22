import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import'../src/index.css';




export default function NavBar() {
  return (
      <Navbar bg="light" data-bs-theme="dark" fixed="top" expand="lg" className="navbar">
        <Container className="d-flex flex-column">
          <Navbar.Brand as={NavLink} to="/" style={{color: "green"}}>Grow Garden 101</Navbar.Brand>
          <Nav className="justify-content-center gap-5">
            <Nav.Link as={NavLink} to="/" style={{color: "black"}}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={{color: "black"}}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/list" style={{color: "black"}}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}