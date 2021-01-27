import React from "react";
import { Col, Row, Container } from "../components/Grid";
import mantech from "../images/mantech.png";
import northrop from "../images/northrop.png";
import dit from "../images/dit.png";
import dsc from "../images/dsc.png";
import webdev from "../images/webdev.png";
import "../styles/MechEng.css";

function MechEng() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
          <h1>Mechanical Engineer</h1>
          <hr></hr>
        </Col>
      </Row>

      <Row>
        <Col size="md-3"></Col>
        <Col size="md-3">
          <img src={mantech} alt="circuit card assembly test system"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <a href="https://www.mantech.com/">Mantech International Corp.</a>
            <br></br>
            - Designed Interface Device hardware to accommodate numerous circuit card assemblies and test
              equipment while following configuration management procedures
              <br></br>
            - Led the Design team on the research and development of Test Program Hardware (TPH) to ISO 9001
              and military standards
              <br></br>
            - Interacted with clients to assure that preliminary and critical design models satisfied
              program specification requirements for the development of First Article Test (FAT) components
              <br></br>
            - Inspected client work sites to evaluate existing program operations and any anticipated
              effects they had on the performance of new program designs or modifications
              <br></br>
            - Prepared Time and Labor analysis for military and commercial client proposals
              <br></br>
            - Trained personnel on the proper methods of completing design tasks from concept to production
              <br></br>
            - Consulted with vendors to assure design specifications and standards were met and that the
              products were inspected and delivered on schedule
              <br></br>
            - Coordinated efforts with the Quality Assurance team to evaluate product discrepancies and the
              corrective action process to “Use As Is” or modify to eliminate project schedule conflicts
              <br></br>
            - Corrected several projects that had fallen behind deadlines by quickly identifying problems
              and providing engineering solutions
              </p>
        </Col>

        <Col size="md-3">
          <img src={northrop} alt="image of drone"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <a href="https://www.northropgrumman.com/">Northrop Grumman IS</a>
            <br></br>
            - Designed specialized mechanical components for custom Electronic Systems that were utilized as
              part of payload assemblies in various aircraft and ground based systems
              <br></br>
            - Utilized specific design tools such as AutoCad Mechanical Desktop, Inventor, SolidWorks, and
              Simulation to analyze the integrity of fabricated parts
              <br></br>
            - Generated Technical Data Packages for systems consisting of Fabrication Drawings, Cable
              Assemblies, Parts Lists, and Wire Diagrams based on ASME standards and contract requirements
              <br></br>
            - Created project material cost and updated schedule reports to assure tasks were completed
              within budget and on time
              <br></br>
            - Consulted with vendors to assure that COTS or fabricated parts met the system design
              requirements
                </p>
        </Col>
      </Row>

      <Row>
        <Col size="md-3"></Col>
        <Col size="md-3">
          <hr class="divider"></hr>
          <img src={dit} alt="image propellant test system"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <a href="https://www.ditusa.com/">Design Integrated Technology</a>
            <br></br>
            - Prepared structural and cost analyses for contract proposals
              <br></br>
            - Managed and updated client project progress databases
              <br></br>
            - Installed systems at customer sites, and conducted equipment/software operation training
              <br></br>
            - Directed all aspects of fabrication and certification of pressure vessels to assure ASME
              approval
              <br></br>
            - Created designs and layouts for product fabrications
              <br></br>
            - Developed stress calculation programs that evaluated the structural adequacy of pressure
              vessels
              <br></br>
            - Successfully designed, developed, and installed data acquisition programs using LabView
              software at the following organizations: Pavlograd Chemical Plant, Hill Air Force Base Propellant
              Analysis Center, DuPont, Lawrence Livermore National Laboratories, Numerous pharmaceutical companies
              <br></br>
            - Upgraded the PC control systems of former customers by utilizing more advanced and current
              hardware/software tools. Customer feedback was utilized to define the critical areas of
              improvement such as: UI development, PC control, and data representation
                </p>
        </Col>

        <Col size="md-3">
          <hr class="divider"></hr>
          <img src={dsc} alt="image of facial recognition system"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <a href="http://stereovisioninc.com/">Digital Signal Corp.</a>
            <br></br>
            - Mechanical Lead that designed components and mechanisms for several facial and biometric
              systems including various electronic enclosure sub-assemblies using SolidWorks / CircuitWorks
              <br></br>
            - Improved existing system designs to enhance aesthetics, and comply with non-destructive
              tests
              <br></br>
            - Assisted Assembly and Quality Techs. to promptly solve component design issues on the Mfr.
              floor
              <br></br>
            - Created rendered images of final products for Sales / Marketing teams using PhotoView 360
              <br></br>
            - Worked with Field Service Techs. assuring systems were properly installed to custom design
              mounts
                </p>
        </Col>
      </Row>

      <Row>
        <Col size="md-3"></Col>
        <Col size="md-3">
          <hr class="divider"></hr>
          <img src={webdev} alt="image of web development"
            className="img-thumbnail img-btm img-ctr" />
          <p className="about"> <a href="https://www.k12privateacademy.com/">K12 International Academy</a>
            <br></br>
            - Developed and revised content files for website affiliated with Archdiocese of Baltimore
              using HTML, CSS, and JavaScript languages
              <br></br>
            - Collaborated with team members to ensure successful testing and implementation of content
              files were completed in a timely manner
              <br></br>
            - Maintained the database of website related files to safeguard the revision control of
              content
              <br></br>
            - Assisted students through the instruct /monitor of high school curriculum from K12 Int.
              Academy
              </p>
              <br></br><br></br>
        </Col>
      </Row>

      <Col size="md-3"></Col>

    </Container >
  );
}

export default MechEng;