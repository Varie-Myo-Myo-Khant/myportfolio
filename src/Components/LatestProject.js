import {Row, Container } from "react-bootstrap"
import videoBanner from "../assets/img/videoBanner.mp4"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
export const LatestProject=()=>{
    return(
        <Container className="latestProject">
            <Row className="latestRow">
            <div className="title">
                <p className="caption">My Latest Project</p>
                <h2 className="proTitle">SalesCraft Pro: Intelligent Retail Suite</h2>
                <div className="prodes">
                    <p>
                    SalesCraft Pro, offers a user-friendly interface for point-of-sale tasks and comprehensive retail management.
                    Additionally, SalesCraft Pro includes an integrated reporting section, harnessing advanced data mining techniques to deliver actionable insights, enabling effective optimization of retail operations.
                </p>
                </div>
                <ul className="latestLangauges">
                <li>React</li>
                <li>Spring Boot</li>
                <li>Java</li>
                <li>Redux</li>
                <li>Data Mining</li></ul>
                <p className="latestLangauges"> 
                <a href="https://github.com/Ms-Myo-Myo-Khant/SalesCraft-Pro-Intelligent-Retail-Suite" target="__blank"> <li><FaGithub/></li></a>
                <a href="https://sales-craft-pro.vercel.app/" target="__blank"><li> <FaExternalLinkAlt/></li></a>
                
                </p>
            </div>
            
            <div className="projectImage">
               <video poster={videoBanner} preload="metadata" playsInline autoPlay loop muted>
               <source src={videoBanner} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
            </div>
            </Row>
        </Container>
        
      )
}