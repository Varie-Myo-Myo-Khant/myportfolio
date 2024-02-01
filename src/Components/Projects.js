import { Container,Row,Col } from "react-bootstrap";
import projImg1 from '../assets/img/hi-find.jpg';
import projImg2 from "../assets/img/i-mage.jpg";
import projImg3 from "../assets/img/ecommerce.jpg";
import {ProjectCard} from "./ProjectCard";
import {ArrowRightCircle} from "react-bootstrap-icons";

function Projects(){
    const projects = [
    {
      title: "Hi-find : Lost & Found Portal",
      description: "In schools, colleges, and universities, students and staff frequently misplace personal items like books, bags, or electronic devices.Hi-Find helps users by promptly returning the lost items to their owners, reducing disruptions to academic activities.",
      imgUrl: projImg1,
      link: "https://github.com/Ms-Myo-Myo-Khant/hi-find",
    },
    {
      title: "I-mage : Image Processing Application",
      description: "I-Mage, an all inclusive image processing system tailored specifically for image editing and image-to-text conversion. The editor provides features such as Image-to-cartoon, Image-to-Text, Brightness, Blur, and Contrast filters.",
      imgUrl: projImg2,
      link :"https://github.com/Ms-Myo-Myo-Khant/I-mage-Main",
    },
    {
      title: "Ecommerce Consumer Behavioral Analysis",
      description: "The study of how individuals interact with online shopping platforms and make purchasing decisions.Customer Segmentation Based On Product Categories using K-means Clustering & Items Frequently Bought Together using Association Alogrithm - FP Growth",
      imgUrl: projImg3,
      link:"https://github.com/Ms-Myo-Myo-Khant/e-commerce-behavioral-analysis",
    },
   {
      title: "Ecommerce Consumer Behavioral Analysis",
      description: "The study of how individuals interact with online shopping platforms and make purchasing decisions.Customer Segmentation Based On Product Categories using K-means Clustering & Items Frequently Bought Together using Association Alogrithm - FP Growth",
      imgUrl: projImg3,
      link:"https://github.com/Ms-Myo-Myo-Khant/e-commerce-behavioral-analysis",
    },
    {
      title: "Ecommerce Consumer Behavioral Analysis",
      description: "The study of how individuals interact with online shopping platforms and make purchasing decisions.Customer Segmentation Based On Product Categories using K-means Clustering & Items Frequently Bought Together using Association Alogrithm - FP Growth",
      imgUrl: projImg3,
      link:"https://github.com/Ms-Myo-Myo-Khant/e-commerce-behavioral-analysis",
    },
  ];

    return(
        <section className="project" id="projects">
           <Container>
                <Row className="pContainer">
                  <Col>
                  <Row className="pTitle">
                    <Col>
                     <span className="subText">Some Things I’ve Built,</span>
                      <h2 className="sectionTitle">My Featured Projects </h2>
                    </Col>
                    <Col md="auto">
                     <button className="btnpj" onClick={()=>console.log('connect')}>View My All Projects <ArrowRightCircle size={25}/></button>
                    </Col>
                  </Row>
                 
                  <Row className="pCardsRow">
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