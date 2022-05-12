import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Try Every Machine Learning Algorithm"
              description="A Streamlit Dashboard, where you can upload your dataset and run some algorithms on it, without writing any code."
              link="https://github.com/AnuragAnalog/Try-every-ML-algorithm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bull Shit Detector"
              description="A Machine learning project used to classify fake news"
              link="https://github.com/AnuragAnalog/bullshit-detector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gender and Age Prediction"
              description="A Machine Learning Project used to predict the Age and Gender of the given person from an image or a live video"
              link="https://github.com/AnuragAnalog/Gender-and-Age-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="A Workout Advisor App"
              description="A Workout Advisor Appication, where you can get a workout plan for your fitness goals."
              link="https://github.com/AnuragAnalog/WorkoutAdvisor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
