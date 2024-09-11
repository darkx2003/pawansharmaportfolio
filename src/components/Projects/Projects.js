import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mahabharat from "../../Assets/Projects/mahabharat.png";
import resumechecker from "../../Assets/Projects/resumechecker.png";
import todolist from "../../Assets/Projects/todolist.png";
import chrunchclone from "../../Assets/Projects/chrunchclone.png";
import moviegenre from "../../Assets/Projects/moviegenre.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mahabharat}
              isBlog={false}
              title="Mahabharata AI Chatbot"
              description="An AI-powered chatbot capable of answering complex queries from the Mahabharata. Developed using NLP and deep learning models. Integrated into a responsive and interactive interface, with a focus on providing insightful and contextual responses. The chatbot is trained using a custom dataset based on multiple Mahabharata volumes."
              ghLink="https://github.com/darkx2003/mahabharataichatbot"
              demoLink="https://huggingface.co/spaces/pawansharma09/epic-mahabharat-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumechecker}
              isBlog={false}
              title="SMART RESUME ANALYZER"
              description="A comprehensive resume analyzer that evaluates resumes based on skills, experience, projects, and other important aspects. It uses NLP techniques to extract relevant data and provide recommendations for improving the resume. The tool is designed to assist job seekers in optimizing their resumes to meet industry standards."
              ghLink="https://github.com/darkx2003/SMART-RESUME-ANALYZER"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do List App"
              description="A minimalistic and user-friendly To-Do List application developed using React.js. It allows users to create, update, and delete tasks, helping in efficient task management. The app also features local storage functionality to save tasks even after closing the browser, ensuring no data is lost."
              ghLink="https://github.com/darkx2003/task_2_todo_list"
              demoLink="https://pawan-to-do-list.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chrunchclone}
              isBlog={false}
              title="Crunchyroll Website Clone"
              description="A fully responsive clone of the popular streaming platform Crunchyroll. Built using HTML, CSS, and JavaScript, this project showcases the ability to replicate real-world websites while incorporating custom features like dynamic navigation and content loading. The clone focuses on the front-end design and user interface experience."
              ghLink="https://github.com/darkx2003/Octanet_task-3_Clone-a-Website"
              demoLink="https://pawan-crunchyroll-clone.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviegenre}
              isBlog={false}
              title="Movie Genre Classification"
              description="A machine learning project that classifies movies into different genres based on their description using NLP techniques. The model is trained using a Kaggle dataset and deployed on Hugging Face. It employs a combination of text processing and classification algorithms to predict the genre with high accuracy."
              ghLink="https://github.com/darkx2003/CodSoft_task_01-02-04/tree/main/TASK-1-MOVIE-GENRE-CLASSIFICATION"
              demoLink="https://huggingface.co/spaces/pawansharma09/movie-genre-classification"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
