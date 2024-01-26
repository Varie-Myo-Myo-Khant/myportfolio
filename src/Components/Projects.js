import { Container,Row,Col } from "react-bootstrap";
import projImg1 from '../assets/img/bg1.jpg';
import projImg2 from "../assets/img/bg2.png";
import projImg3 from "../assets/img/bg3.svg";
import {ProjectCard} from "./ProjectCard"
function Projects(){
    const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

    return(
        <section className="project" id="projects">
           <Container>
                <Row>
                  <Col>
                   <h2>My Recent Projects </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Row>
                  {
                    projects.map((project,index)=>{
                        return(
                            <ProjectCard key={index} {...project} />
                        )
                    }
                    )
                  }
                  </Row>
                  </Col>
                </Row>
                  </Container>
        </section>
    );

}

export default Projects;