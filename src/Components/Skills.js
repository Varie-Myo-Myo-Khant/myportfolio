//for carousel
import { Container,Row,Col } from "react-bootstrap";


function Skills(){

  return(
    <section className="skill" id="skills">
     <Container>
        <Row className="skillcontainer">
            <Col md="4"> 
                <span className="subText">Get to know about </span>
                <h2 className="sectionTitle">My Skills</h2> 
                <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
</p>
            </Col>
           <Col>
                <Row className="skillRow">
                    <Col className="scards">
                        <h3 className="stitle">Programming Languages</h3>
                        <span className="sdescription">JavaScript, TypeScript, HTML, Twig, Nunjucks, CSS, Sass, PHP</span>
                    </Col>
                    <Col className="scards">
                        <h3 className="stitle">Libraries & Frameworks</h3>
                        <span className="sdescription">JavaScript, TypeScript, HTML, Twig, Nunjucks, CSS, Sass, PHP</span>
                    </Col>
                </Row>
                <Row className="skillRow">
                    <Col className="scards">
                        <h3 className="stitle">Tools & Platforms</h3>
                        <span className="sdescription">JavaScript, TypeScript, HTML, Twig, Nunjucks, CSS, Sass, PHP</span>
                    </Col>
                    <Col className="scards">
                        <h3 className="stitle">Others</h3>
                        <span className="sdescription">JavaScript, TypeScript, HTML, Twig, Nunjucks, CSS, Sass, PHP</span>
                    </Col>
                </Row>
            </Col>
        </Row>

        
</Container>
    </section>
  )
}

export default Skills;