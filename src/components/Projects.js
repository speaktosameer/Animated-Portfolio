import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorsharp2 from '../assets/img/color-sharp2.png';
// import 'animate.css'
// import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    const projects = [
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Bussiness Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <h2>Projects</h2>
                    <p>LoremThe href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, b</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav varient="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return(
                                            <ProjectCard 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2}></img>
        </section>
    )
     
}