
import { Container, Row, Col } from "react-bootstrap";
import icon from '../assets/img/patch-check-fill.svg'
function Experience(){
    return(
        <section className="experience" id="experiences">
        <Container>
            <Row>
            <h2>My Experiences</h2>
                <Col>
                    <div>
                        <h3><img src={icon}/>Web Director | Digital Laboratory Myanmar</h3>
                        <span>Aug 2022 - May 2023</span>
                        <p>Managed multiple websites, improving UI/UX for Japanese sites and building with WordPress, Webflow, and Ghost. Conducted tech research and contributed to SEO by monitoring rankings and providing weekly reports.</p>
                    </div>
                    <div>
                        <h3><img src={icon}/>Junior Software Test & QA Services | Ovaspace</h3>
                        <span> Apr 2022 - Jun 2022</span>
                        <p>Tested ERP products, wrote documentation, and presented weekly customer meetings in English. Implemented customer data into ERP system and provided support to the development team.</p>
                    </div>
                    <div>
                        <h3><img src={icon}/>Social Media Coordinator | Non-Profit Organization</h3>
                        <span> Feb 2021 - Mar 2022</span>
                        <p>Created diverse content for Non-Profit Organizations in English and Myanmar, including campaigns and product copy. Managed social media platforms, designing graphics and posters, and oversaw team for timeline uploads.</p>
                    </div>
                </Col>
                <Col md="auto">
                    <div class="circle"></div>
                    <div class="line"></div>
                    <div class="circle"></div>
                    <div class="line"></div>
                    <div class="circle"></div>
                    <div class="line"></div>
                </Col>
                <Col>
                    <div>
                        
                        <h3><img src={icon}/>IT Research Assistant | For a Ph.D at Chulalongkorn University</h3>
                        <span>Mar 2020 - Present</span>
                        <p>Managed survey experiments for AI tools research, ensuring smooth operation. Analyzed data proficiently using statistical methods and IBM SPSS software and contributed to drafting a research paper following academic standards.</p>
                    </div>
                    <div>
                        <h3><img src={icon}/>Programming Lecturer | Freelance</h3>
                        <span> Jan 2022 - Apr 2022</span>
                        <p>Teaching students about the details of Programming concepts, Website,and Database.</p>
                    </div>
                     <div>
                        <h3><img src={icon}/>Teaching Assistant | Chulalongkorn University</h3>
                        <span> Apr 2021 - Apr 2022</span>
                        <p>Prepared lecture slides on Programming, Design Thinking, and Management. Marked tutorial papers, formulated questions for mini exams, and conducted data analysis for IT courses and student marks.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Experience;