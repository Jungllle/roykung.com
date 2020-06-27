import { Container, Navbar } from "react-bootstrap";
import React from "react";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Roy Lin 林昆彥</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
