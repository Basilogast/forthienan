import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import piano from "../assets/img/piano.png";
import todo from "../assets/img/todo.png";
import keeper from "../assets/img/keeper.png";
import mateskin from "../assets/img/mateskin.png";
import simon from "../assets/img/simon.png";
import drum from "../assets/img/drum.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Simple Piano Project",
      description: "HTML5, CSS3, and JS ES6",
      imgUrl: piano,
      link:"https://basilogast.github.io/SimplePiano/",
    },
    {
      title: "To-Do App",
      description: "HTML5, CSS3, and JS ES6",
      imgUrl: todo,
      link:"https://basilogast.github.io/ToDoProject/",
    },
    {
      title: "Note Keeper App",
      description: "React.js",
      imgUrl: keeper,
      link:"https://basilogast.github.io/TheKeeperApp/",
    },
    {
      title: "Loreal Brandstorm Product Portfolio",
      description: "HTML5, CSS3, and JS ES6",
      imgUrl: mateskin,
      link:"https://basilogast.github.io/Mateskin/",
    },
    {
      title: "Simon Game",
      description: "HTML5, CSS3, and JS ES6",
      imgUrl: simon,
      link:"https://basilogast.github.io/SimonGame/",
    },
    {
      title: "Drum Kit",
      description: "HTML5, CSS3, and JS ES6",
      imgUrl: drum,
      link:"https://basilogast.github.io/DrumKit/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Not available, please come back soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Not available, please come back soon</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
