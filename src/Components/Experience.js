
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

function Experience(){
    const experiences = [
    {
      title: "Web Director",
      company:"Digital Laboratory Myanmar",
      duration:"Aug 2022 - May 2023",
      description: "Managed multiple websites, improving UI/UX for Japanese sites and building with WordPress, Webflow, and Ghost. Conducted tech research and contributed to SEO by monitoring rankings and providing weekly reports.",
    },
    {
      title: "Junior Software Test & QA Services",
      company:"Ovaspace",
      duration:"Apr 2022 - Jun 2022",
      description: "Tested ERP products, wrote documentation, and presented weekly customer meetings in English. Implemented customer data into ERP system and provided support to the development team.",
    },
    {
      title: "Freelance IT Research Assistant",
      company:"For a Ph.D at Chulalongkorn University",
      duration:"Mar 2020 - Present",
      description: "Managed survey experiments for AI tools research, ensuring smooth operation. Analyzed data proficiently using statistical methods and IBM SPSS software and contributed to drafting a research paper following academic standards.",
    },
    {
      title: "Programming Lecturer",
      company:"Freelance",
      duration:"Jan 2022 - Apr 2022",
      description: "Teaching students about the details of Programming concepts, Website,and Database.",
    },
]
    return(
        <section className="experience" id="experiences">
            <Container>
              <Row>
                    <span className="expText">Where I’ve Worked,</span>
                    <h2 className="sectionTitle">My Experiences </h2>
              
                 <Accordion className="expContainer" defaultActiveKey="0" >
                     {
                    experiences.map((experience,index)=>{
                        return(
                    <Accordion.Item  key={index} eventKey={index} className="expItem">
                            <Accordion.Header className="expItemHeader">
                                
                                <Col lg={8}>
                                <b className="workTitle">{experience.title}</b> @ {experience.company}
                                </Col>
                                <Col md="auto">
                                <span className="duration">{experience.duration}</span>
                                </Col>
                               
                                </Accordion.Header>
                            <Accordion.Body className="expItemBody">
                            
                            <p>{experience.description}</p>
                            </Accordion.Body>
                    </Accordion.Item>
                        )
                    }
                    )
                  }
                    
            
                    </Accordion>
                    </Row>
            </Container>
        </section>
    )
}

export default Experience;