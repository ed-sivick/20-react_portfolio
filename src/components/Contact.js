import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "../styles/Contact.css";

function Contact() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">

          <div className="contactInfo about">

            <p className="contactText">Contact Information:</p>
            <p className="about">Email: <a href="mailto:ed@sivick.net">ed@sivick.net</a><br></br>
      LinkedIn: <a href="https://www.linkedin.com/in/ed-sivick-7b570b68/">
                Sivick LinkedIn</a><br></br>
          GitHub Profile: <a href="https://github.com/ed-sivick">Sivick GitHub</a><br></br>
          Resume: <a href="https://ed-sivick.github.io/16-updated_portfolio/assets/esivick_resume.pdf">Sivick Resume</a>
            </p><br></br><br></br>

          </div>
          <Col size="md-3"></Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
