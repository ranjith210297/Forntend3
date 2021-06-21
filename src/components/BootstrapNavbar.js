import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        navbar="dark"
        bg="success"
        text="light"

      >
        
       
        <Navbar.Brand href="#home">
      <img
        src="/logo2.jpeg"
        width="25"
        height="25"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
        
        <Navbar.Brand href="/" style={{ paddingLeft: "30px", color: "#344034" }}>
          Cotton Leaf Disease Detection
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ padding: "20px" }}>
          <Nav className="mr-auto">
            
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Predictor">
              <Nav.Link>Predictor</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Aboutus">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contactus">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
        
  
      
    );
    
   
  }

}

export default BootstrapNavbar;
