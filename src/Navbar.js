
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

function Navbarr() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
      <Navbar.Brand href="#home">
      

      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Hombre" id="navbarScrollingDropdown">


              <NavDropdown.Item href="#action3">Jordan</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Nike
              </NavDropdown.Item>

              <NavDropdown.Item href="#action5">
                LeBron
              </NavDropdown.Item>
            </NavDropdown>

            
            <NavDropdown title="Mujer" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Jordan</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Nike
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                LeBron
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Unisex" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Jordan</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Nike
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                LeBron
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}


export default Navbarr;