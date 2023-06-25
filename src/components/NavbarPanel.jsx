import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarPanel = () => {


  const cartProducts = useSelector(state => state.cart);


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">YOUR BRAND.</Navbar.Brand>

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link to="/" as={Link}>
            Prouducts
          </Nav.Link>
        </Nav>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"> 
          <Navbar.Text>
          <Nav.Link to="/cart" as={Link}>
            My Bag <span >{cartProducts.length}</span>
          </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPanel;
