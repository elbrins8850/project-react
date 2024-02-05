import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sxuo7sq", "template_rj5hvga",form.current, "_vjx6-keZ28zZ3O9D")
      .then(() => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        });
        e.target.reset();
      
  };

  return (
    <>
      <section className="contact" id="Contact">
        <Container>
          <h3
            className="animate__animated animate__backInLeft"
            animation-duration="50s"
            danimate-delay="25s"
          >
            Contact us
          </h3>
          <Row className="align-items-center">
            <Col
              md={6}
              sm={12}
              className=" left animate__animated animate__backInLeft"
              animation-duration="50s"
              danimate-delay="25s"
            >
              <div>
                <p>
                  <span>Email: </span>elbrins8850@gmail.com
                </p>
                <p>
                  <span>Phone: </span>01115882130
                </p>
                <p>
                  <span>Address: </span>6Of The Octaber
                </p>
              </div>
            </Col>
            <Col
              md={6}
              sm={12}
              className="right animate__animated animate__backInLeft"
              animation-duration="50s"
              danimate-delay="25s"
            >
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="d-flex">
                  <input type="text" name="name" placeholder=" Name" />
                  <input type="text" name="company" placeholder="Company" />
                  </div>
                  <div className="d-flex">
                  <input type="text" name="email" placeholder=" Email" />
                  <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  <textarea name="message" placeholder="Message" />
                  <button type="submit"> Send message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
