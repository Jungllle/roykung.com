'use client';
import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const NAV_ITEMS = [
  {
    path: '/songs',
    label: '喜歡的歌曲',
  },
];

const NavigationBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Roy Lin 林昆彥</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {NAV_ITEMS.map(({ path, label }) => (
              <Nav.Link key={path} href={path}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
