/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import 'animate.css';

const Navbarrrr = ()=> {

  
  return (
    <>
      <Navbar className='all bg-dark animate__animated animate__backInDown'>
        <Container className='nav'>
        <NavLink to="/"> <img src='image\logo.jpg' alt='image' width={100}></img></NavLink>
          <Nav className="link" >
            <HashLink to="/#home" className='lii'>Home</HashLink>
            <HashLink to="/#Contact" className='lii'>Contact-us</HashLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarrrr;






