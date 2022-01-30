import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Roy Lin 林昆彥</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href={`/songs`}>
              喜歡的歌曲
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
