import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import countapi from 'countapi-js';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  // State to store visitor count
  const [visitorCount, setVisitorCount] = useState(0);

  // Fetch visitor count when component mounts
  useEffect(() => {
    countapi.visits('pawan-sharma').then((result) => {
      setVisitorCount(result.value);
    });
  }, []);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Pawan Sharma ^-^</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} PS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/darkx2003"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pawansharma09/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/pawan_sharma0909"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
          <p style={{ color: "white", marginTop: "10px" }}>
            Unique Visitors: {visitorCount}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
