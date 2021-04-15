import { Link } from "gatsby"
import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
// import * as headerStyles from "./header.module.css"

export default () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="External Links" id="collasible-nav-dropdown">
          <NavDropdown.Item href="https://xenodochial-lamport-33eb15.netlify.app/">
            Hamid Goudarzi
          </NavDropdown.Item>
          <NavDropdown.Item href="https://github.com/HamidGoudarzi1988">
            GitHub
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to="/">
         Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about/">
          About Us
        </Nav.Link>
        <Nav.Link as={Link} to="/contact/">
          Contact Us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
