import React from "react";
import "./Nav.css";
import { Navbar ,Container,Nav } from "react-bootstrap";
import logo from"./Untitled.jpeg";
const Navs=()=>{
    return(
<Navbar expand="lg"  className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src= {logo} title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Explor Food</Nav.Link>
            <Nav.Link href="#link">Review</Nav.Link>
            <Nav.Link href="#link">Faq</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="last-item">
                0957484747
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    )
}
export default Navs;