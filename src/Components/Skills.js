//for carousel
import { Container,Row,Col } from "react-bootstrap";


function Skills(){

  return(
    <section className="skill" id="skills">
     <Container>
        <Row className="skillcontainer">
           
                <span className="subText">Get to know more about </span>
                <h2 className="sectionTitle">My Skills</h2> 
           
                <Row className="skillRow">
                    <Col className="scards">
                        <h3 className="stitle">Programming Languages</h3>
                        <span className="sdescription">Proficient in Python, Java, JavaScript, PHP, TypeScript, C++, and C. Experienced in writing clean, efficient, and scalable code for AI and full-stack applications.</span>
                    </Col>
                    <Col className="scards">
                        <h3 className="stitle">Frameworks & Libraries</h3>
                        <span className="sdescription">Skilled in Django, Laravel, Flask, FastAPI, React.js, Next.js, Spring Boot, LangChain, and OpenCV. Experienced in building end-to-end applications with microservices architecture.</span>
                    </Col>
                    <Col className="scards">
                        <h3 className="stitle">Databases & Data Management</h3>
                        <span className="sdescription">Experienced in MySQL, PostgreSQL, MongoDB, SQLite, Milvus, & Chroma. Specializing in query optimization, and vector database implementation for AI solutions.</span>
                    </Col>
                </Row>
                <Row className="skillRow">
                    <Col className="scards">
                        <h3 className="stitle">AI & Machine Learning</h3>
                        <span className="sdescription">Worked with Manching Learning algorithms, Image Processing, Computer visiion, and LLM. Expertise in LLM integration, RAG-based applications, data analytics, and AI-driven recommendation systems.</span>
                    </Col>
                    <Col className="scards">
                        <h3 className="stitle">Tools & Deployment</h3>
                        <span className="sdescription">Skilled in AWS, GCP, Docker, GitHub, GitLab, CI/CD, WordPress, Webflow, and Vercel. Hands-on with Arduino, Raspberry Pi, UI/UX design, SEO, and analytics tools like IBM SPSS and Google Analytics.</span>
                    </Col>
                    <Col className="scards">
                        <h3 className="stitle">Soft Skills & Collaboration </h3>
                        <span className="sdescription">Strong problem-solving, teamwork, and adaptability. Experience working in Agile environments, conducting technical research, and effectively communicating technical concepts.</span>
                    </Col>
                </Row>
            
        </Row>

        
</Container>
    </section>
  )
}

export default Skills;