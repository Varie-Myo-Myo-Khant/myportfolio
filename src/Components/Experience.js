
import { Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

function Experience(){
    const experiences = [
      {
      title: "Software Developer",
      company:"Freelance",
      duration:"June 2023 - Present",
      description:<ul> 
        <li>Building an Intelligent Retail System with Spring Boot RESTful API (backend) and React (frontend), demonstrating full-stack development expertise in JWT Spring Security, Redux, and data mining techniques like association rule.</li>
        <li>Proficiently developed diverse projects like an Image Recognition System and a Lost and Found System using Python, Django, OpenCV, etc.</li>
        <li>Conducted Market Basket Analysis using Data Mining Algorithms, Apache PySpark, and PostgreSQL, delivering actionable insights to optimize marketing strategies.</li>
       <li>Collaborated effectively within teams to ensure project success and meet client requirements.</li>
        </ul>,
    },
    {
      title: "Web Director",
      company:"Digital Laboratory Myanmar | Full Time",
      duration:"August 2022 - May 2023",
      description: <ul>
        <li>Managed multiple websites, improving UI/UX for Japanese sites and building with WordPress, Webflow, and Ghost. Conducted tech research and contributed to SEO by monitoring rankings and providing weekly reports.</li>
        <li>Managed a portfolio of at least 8 websites, ensuring high-quality results and timely project completion by
        facilitating seamless communication across diverse teams in Japan and Myanmar, including customer success,
        content, design, marketing, and development.</li>
        <li>Oversaw UI/UX and website updates for key company domains such as Dxable.com, ImplementDigital.com, and
        Generative.com, prioritizing an optimal user experience.</li>
        <li>Conducted extensive research on industry-leading CMS tools like Webflow and Ghost, as well as automated
        testing tools such as Selenium, to enhance website performance. Through this process, Mastered Webflow,
        Ghost, and WordPress to successfully build and manage sites, including notable projects like Dxable.com and
        Generative.com.</li>
        <li>Made significant contributions to the SEO team by actively monitoring website rankings using tools like
         SERanking, Google Search Console, and Google Analytics. Identified improvement opportunities and
        implemented effective strategies, generating impactful weekly reports to drive continuous optimization efforts.</li>
        </ul>,
    },
    {
      title: "IT Research Assistant",
      company:"Dr. Aung Pyae (SE, Chulalongkorn University, Thailand) | Part Time",
      duration:"March 2020 - May 2023",
      description: <ul>
        <li>
          Managed and supervised survey experiments, including a comparison of Generative AI tools such as ChatGPT
          and Google Bard, and an image-to-text tool like OpenAI's DALLE usability study with 30 participants, ensuring
          participant engagement and smooth operation.</li>
          <li>Conducted the ETL process for survey data and analyzed collected data using statistical methods and IBM SPSS,
          generating insightful interpretations.</li>
          <li>Collaborated on drafting research papers such as "Covid-19 & Social Media," "VR & Social Interaction," and "Nonnative English Speakers' Perceptions of Voice User Interfaces: A Usability Study," published in IEEE. Ensured
          adherence to academic standards, contributing to high-quality scholarly work.</li>
        
      </ul>,
    },
    {
      title: "Junior Software Test & QA Services",
      company:"Ovaspace | Full Time",
      duration:"April 2022 - June 2023",
      description:<ul>
      <li>Primarily responsible for testing key ERP modules (Accounting, Attendance, HCM, PAY, POS) and mastered their
      business logic, ensuring weekly updates were error-free.</li>
      <li>Delivered weekly updates to the customer base in Singapore and provided customer support tailored to their
      queries.</li>
      <li>Prepared comprehensive test releases and documented test results for ERP system modules to ensure thorough
      quality assurance.</li>
      <li>Additionally, facilitated the implementation of customer data into the ERP system to streamline operations and
      enhance user experience.</li>
      </ul>,
    },
    
    {
      title: "Programming Lecturer",
      company:"Freelance",
      duration:"2022",
      description:<ul>
        <li>Instructed students on the intricacies of Programming concepts, Website Development, and Database
        Management, covering topics such as HTML, CSS, MySQL, JavaScript, and Bootstrap.</li>
        <li>Developed weekly lecture slides and facilitated hands-on experiences to enhance student learning</li>
      </ul>,
    },
    {
      title: "Teaching Assistant",
      company:"Dr. Aung Pyae (SE, Chulalongkorn University, Thailand) | Part Time",
      duration:"March 2021 - December 2022",
      description: <ul>
        <li>Researched and created lecture slides covering Programming, Design Thinking, and Management topics.</li>
        <li>Evaluated student papers and crafted challenging mini-exam questions for assessment.</li>
        <li>Analyzed IT course data to identify trends and areas for improvement.</li>
      </ul>
    },
]
    return(
        <section className="experience" id="experiences">
            <Container>
              <Row className="skillcontainer">
                    <span className="subText">Get to know more about,</span>
                    <h2 className="sectionTitle">My Experiences </h2>
    
                    {/* <p className="sdescription">With 4+ years of experience in software engineering and AI development, I have worked across telecom, AI startups, and freelance projects. At ATOM Myanmar, I contributed to large-scale broadband subscription systems, sales applications, and data management. At Mascot Pte Ltd, I developed an AI-powered recommendation system using LLMs and vector databases. As a freelance AI & full-stack developer, I have built AI chatbots, recommendation engines, and automation tools using Python, Django, LangChain, and cloud technologies. My expertise spans enterprise applications, microservices, and cloud-based AI solutions, delivering impactful and scalable innovations.</p> */}
                 {/* <Accordion className="expContainer" defaultActiveKey="0" >
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
                            
                            {experience.description}
                            </Accordion.Body>
                    </Accordion.Item>
                        )
                    }
                    )
                  }
                    
            
                    </Accordion> */}
                    </Row>
            </Container>
        </section>
    )
}

export default Experience;