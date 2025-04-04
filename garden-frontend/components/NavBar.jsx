import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import'../src/index.css';




export default function NavBar() {
  return (
      <Navbar bg="light" data-bs-theme="dark" expand="lg" className="navbar">
            <div className="d-flex justify-content-center justify-content-lg-start w-100">
            <img src="../src/images/logo.jpeg" alt="Garden 101 Logo"
                    className="logo"
            style={{ width: '100px', height: 'auto'}}
          />
            </div>
        <Container className="d-flex flex-column align-items-center">
          <Navbar.Brand as={NavLink} to="/" style={{color: 'darkgreen'}}>Growing Garden 101</Navbar.Brand>
          <Nav className="justify-content-center gap-5">
            <Nav.Link as={NavLink} to="/" style={{color: "black"}}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/easyPlants" style={{color: "black"}}>Easy Plants</Nav.Link>
            <Nav.Link as={NavLink} to="/funFacts" style={{color: "black"}}>Fun Facts</Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={{color: "black"}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
