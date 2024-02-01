//for carousel
import { Container,Row,Col } from "react-bootstrap";


function Skills(){

  return(
    <section className="skill" id="skills">
     <Container>
        <Row className="skillcontainer">
            <Col md="5"> 
                <span className="subText">Get to know more about </span>
                <h2 className="sectionTitle">My Skills</h2> 
                <p>My passion is bringing creations to life on the internet. My journey into web and software development began in 2016 during my first year at University, where I discovered the excitement of coding. Since then, I've honed my skills through freelancing and working at two IT companies. Continuously driven to stay at the forefront of technology, I actively seek to learn the latest languages, frameworks, tools, and other tech knowledge to enhance my capabilities. 
                    Currently, I am well-versed in utilizing Python, Django, React, and Java Spring Boot, making them my primary languages and frameworks of choice for my projects.
</p>
            </Col>
           <Col>
                <Row className="skillRow">
                    <Col className="scards">
                        <h3 className="stitle">Programming Languages</h3>
                        <span className="sdescription">Python, Java, PHP, JavaScript, C++, HTML, CSS, C, JQuery, J2EE </span>
                    </Col>
                    <Col className="scards">
                        <h3 className="stitle">Libraries & Frameworks</h3>
                        <span className="sdescription">Django, React, Angular, Bootstrap, Apache PySpark, OpenCV</span>
                    </Col>
                </Row>
                <Row className="skillRow">
                    <Col className="scards">
                        <h3 className="stitle">Tools & Platforms</h3>
                        <span className="sdescription">WordPress, Webflow, Ghost, Chef, Vercel, GitHub, AWS, IBM SPSS, SE Ranking, Google Analytics</span>
                    </Col>
                    <Col className="scards">
                        <h3 className="stitle">Hardware & Others </h3>
                        <span className="sdescription">Arduino, Rasberry PI, 3D Printer, Laser Cutter, 3D Modelling, 2D Design, UI\UX Design, SEO</span>
                    </Col>
                </Row>
            </Col>
        </Row>

        
</Container>
    </section>
  )
}

export default Skills;