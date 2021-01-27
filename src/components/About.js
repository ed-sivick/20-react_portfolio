import React from "react";
import { Col, Row, Container } from "../components/Grid";
import esivick from "../images/esivick.png";
import "../styles/About.css";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">

          <h1>About Me</h1>
          <hr></hr>
          <img src={esivick} alt="picture of Ed Sivick"
            className="img-thumbnail img-right float-left img-ctr" />
          <p className="about">
            Ed Sivick is a Mechanical Engineer who is improving his skill set through The
            George Washington University to become a Full Stack Web Developer. As an accomplished
            Engineer, Ed has won several employer awards including the annual President's Excellence
            Award in the Innovation and Technology category at Northrop Grumman. Ed and his team
            played a critical role in the deployment of several systems engineering projects that
            were utilized as part of the Northrop Grumman Unmanned Aerial Vehicle (UAV) program.
                            </p>
          <p className="about">
            Ed earned his Bachelor of Science degree in Mechanical Engineering at the University of
            Pittsburgh. Early in his career, he had the opportunity to work as both a Mechanical and
            Software Engineer at Design Integrated Technology. The company designs and manufactures
            pressure vessels, industrial mixers, and propellant test equipment. Many systems were
            integrated with Data Acquisition and Control (DAQ) programs that Ed developed using
            LabVIEW.
                            </p>
          <p className="about">
            Ed later worked as a Mechanical Engineer for Mantech Test Systems, Northrop Grumman, and
            Digital Signal Corporation. At each of these companies he designed mechanical systems
            using AutoCad and SolidWorks which are 3D computer-aided drafting (CAD) software
            applications. He oversaw the mechanical development from design to prototype, and final
            production. These systems were later utilized by the US armed forces of The Army, Navy,
            Air Force, and Marine Corps.
                            </p>
          <p className="about">
            Ed continues to utilize SolidWorks to design and fabricate new consumer based products.
            With the acceptance of these products, he hopes to help those with hand dexterity issues
            as well as reduce the amount of yard debris that is sent to Waste Management facilities
            or landfills.
                            </p>
          <p className="about">
            Ed has completed previous contract work in which he developed and revised website
            content files using HTML, CSS, and JavaScript. It is his desire to expand this skill set
            by applying the same focus and attention to detail from his mechanical design background
            as a full stack web developer.
                            </p>

          <Col size="md-3"></Col>
        </Col>
      </Row>
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

export default About;
