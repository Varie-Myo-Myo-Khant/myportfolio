import { Row,Col,Container } from 'react-bootstrap';
// importing required resources

import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/git.svg';
import navIcon3 from '../assets/img/gmail.svg';

export const Footer=()=>{
    return(
        <>
        <Container className='mfooter'>
            <Row>
                <Col md="auto">
                    <span className="subText">Copyright ©️ Myo Myo Khant. All Rights Reserved.</span>
                </Col>
                <Col>
                </Col>
                <Col md="auto">
                <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/myo-myo-khant" target='__blank'><img src={navIcon1} alt="My LinkedIn Account"/></a>
                <a href="https://github.com/Ms-Myo-Myo-Khant" target='__blank'><img src={navIcon2} alt="My Github Account"/></a>
                <a href="mailto:myokhant122021@gmail.com"><img src={navIcon3} alt="My Gmail"/></a>
            </div>

          </span>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}