import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from './images/spacex.png';
import './HomePage.css'
const Navigation = () => {
  return (
    <Container>
      <Nav class="navBar">
        <Link class="link" to="/">
          <img class="logo" src={logo}/>
        </Link>

        <Link class="link" to="/">
          Book
        </Link>

        <Link class="link" to="/">
          Manage
        </Link>

        <Link class="link" to="/">
          Experience
        </Link>

        <Link class="link" to="/">
          Where we fly
        </Link>


      </Nav>
    </Container>
  );
};

export default Navigation;
