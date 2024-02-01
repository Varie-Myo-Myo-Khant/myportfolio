import { Container,Row,Col } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {Link } from "react-router-dom";
function Projects(){
    const projects = [
    {
      title: "Hi-find : Lost & Found Portal",
      description: "In schools, colleges, and universities, students and staff frequently misplace personal items like books, bags, or electronic devices.Hi-Find helps users by promptly returning the lost items to their owners, reducing disruptions to academic activities.",
      language :["Python","Django","NodeJs","Html","MySQL"],
      link: "https://github.com/Ms-Myo-Myo-Khant/hi-find",
    },
    {
      title: "I-mage : Image Processing Application",
      description: "I-Mage, an all inclusive image processing system tailored specifically for image editing and image-to-text conversion. The editor provides features such as Image-to-cartoon, Image-to-Text, Brightness, Blur, and Contrast filters.", 
      language :["Python","OpenCV","Tkinter"],
      link :"https://github.com/Ms-Myo-Myo-Khant/I-mage-Main",
    },
    {
      title: "Ecommerce Consumer Behavioral Analysis",
      description: "The study of how individuals interact with online shopping platforms and make purchasing decisions.Customer Segmentation Based On Product Categories using K-means Clustering & Items Frequently Bought Together using Association Alogrithm - FP Growth",  
      language :["Python","Apache PySpark","Postgre SQL"],
      link:"https://github.com/Ms-Myo-Myo-Khant/e-commerce-behavioral-analysis",
    },
    {
      title: "Speech Recognition and Smart Door Lock System",
      description: "Smart Home Automation System with Raspberry Pi hardware, Face Recognition,Voice Recognitoin, and the Google Assistant API. Users can control home functions like lights using voice commands. The system also features facial recognition technology to enhance the security of the smart door lock system.",
     language :["Python","Face Recognition","Voice Recognitoin","Rasberry PI"],
      link:"https://github.com/Ms-Myo-Myo-Khant/Smart-Home",
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
                     <Link to="/projects" ><button className="btnpj" >View All Projects <ArrowRightCircle size={25}/></button></Link>
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