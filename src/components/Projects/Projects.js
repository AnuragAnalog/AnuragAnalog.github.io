import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fakenews from "../../Assets/Projects/fakenews.jpg";
import genderandage from "../../Assets/Projects/genderandage.jpg";
import tryeverymachine from "../../Assets/Projects/tryeverymachine.jpg";
import workoutadvisor from "../../Assets/Projects/workoutadvisor.jpg";

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
              imgPath={tryeverymachine}
              isBlog={false}
              title="Try Every Machine Learning Algorithm"
              description="A Streamlit Dashboard, where you can upload your dataset and run some algorithms on it, without writing any code."
              link="https://github.com/AnuragAnalog/Try-every-ML-algorithm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakenews}
              isBlog={false}
              title="Bull Shit Detector"
              description="A Machine learning project used to classify fake news"
              link="https://github.com/AnuragAnalog/bullshit-detector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={genderandage}
              isBlog={false}
              title="Gender and Age Prediction"
              description="A Machine learning project to detect gender and age of the person in the given image"
              link="https://github.com/AnuragAnalog/Gender-and-Age-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workoutadvisor}
              isBlog={false}
              title="Workout Advisor"
              description="A Workout Advisor Application build in Android Studio"
              link="https://github.com/AnuragAnalog/WorkoutAdvisor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
