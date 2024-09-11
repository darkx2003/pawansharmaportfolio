import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pawan Sharma </span>
            from <span className="purple"> Bhilai, Chhattisgarh, India.</span>
            <br />
            I am currently pursuing my <span className="purple">Bachelors in Computer Science & Engineering (AI)</span> at <span className="purple">BIT, Durg.</span>
            <br />
            I'm passionate about AI, web development, and solving complex problems with technology.
            <br />
            <br />
            Besides coding, here are a few other activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Anime and immersing in different storylines.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manhwa/Manhuas and discovering new adventures.
            </li>
            <li className="about-activity">
              <ImPointRight /> Staying active by working out and keeping fit.
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by curiosity, empowered by technology."{" "}
          </p>
          <footer className="blockquote-footer">Pawan Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
