/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text*/ 
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { HashLink } from "react-router-hash-link";
import { ContactUs } from './Contact-us'

const Home = () => {

  return (
  <>
  <section className="home" id="home">
    <Container>
      <Row>
      
        <Col md={7} sm={12} className="text animate__animated animate__backInLeft"animation-duration="50s" danimate-delay="25s" >
          <p>
            WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT<span>//</span>
            SEO
          </p>
          <h2>Turn Your Website into a customer-acquisition engine.</h2>
          <h5>we bulid marketing websites that help you sell on autopilot</h5>
          <HashLink to="/#Contact"><button>Let's Talk</button></HashLink>
        </Col>
        <Col md={5} sm={12} className="img animate__animated animate__backInRight"animation-duration="50s" danimate-delay="25s">
          <img src="image/landing-image.jpg"/>
        </Col>
      </Row>
    </Container>
  </section>
  <section className="home2" >
    <Container>

    </Container>
  </section>
  <ContactUs/>
  </>
  );
};

export default Home;

