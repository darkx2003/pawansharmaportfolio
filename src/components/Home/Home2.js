import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Pawan Sharma, a tech enthusiast and problem solver with a passion for coding and AI development. 
              I started my journey with programming and continue to hone my skills each day.  
              <br />
              <br />I'm proficient in languages such as
              <i>
                <b className="purple"> Python, Java, and Javascript, </b>
              </i>
              and have gained experience in
              <b className="purple"> AI, Machine Learning, and Data Structures. </b>
              <br />
              <br />
              My areas of interest are building impactful &nbsp;
              <i>
                <b className="purple">Machine Learning models, Web Applications, </b> 
                and exploring &nbsp;<b className="purple">Blockchain Technology.</b>
              </i>
              <br />
              <br />
              I am constantly evolving, and I love applying my skills to solve real-world problems. 
              I also enjoy building projects with <b className="purple">Hugging face,Vercel,Streamlit </b> and 
              <i>
                <b className="purple"> various libraries and frameworks. </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/darkx2003"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pawansharma09/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pawan_sharma0909"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
