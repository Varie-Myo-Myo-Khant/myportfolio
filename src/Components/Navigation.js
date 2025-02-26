// importing required libraries
import { useState,useEffect } from 'react';
import { Nav,Navbar,Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link'; 

// importing required resources
import logo from '../assets/img/fav.svg';
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/git.svg';
import navIcon3 from '../assets/img/gmail.svg';
import resume from '../assets/img/MyoMyoKhantCV.pdf';
import book from '../assets/img/SaleCraftPro.pdf';

function Navigation() {

  //for chaning nav link class
    const [activeLink,setActiveLink]=useState('home');

    //updating current nav link class
    const onUpdateActiveLink =(value) =>{
        setActiveLink(value);
    }

    //for Navbar scrolled effect
    const [scrolled,setScrolled] =useState(false);

    //to track scroll position
    useEffect(()=>{
        const onScroll= ()=>{
        if (window.scrollY >50){
            setScrolled(true);
        } else{
            setScrolled(false)
        }
        }
        window.addEventListener("scroll",onScroll);

        return ()=> window.removeEventListener("scroll",onScroll)
    }
    ,[])

  return (

    //scrolled class name is set hear to change the style when scroll
   
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>

        {/* logo */}
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className='brand'/>
        </Navbar.Brand>

       

        {/* changing className of current nav link */}
       
          <Nav className="ms-auto">
            <Nav.Link href="/#home" className={activeLink ==='home'? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="/#skills" className={activeLink ==='skills'? 'active navbar-link': 'navbar-link'}onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="/#experiences" className={activeLink ==='experiences'? 'active navbar-link': 'navbar-link'}onClick={()=> onUpdateActiveLink('experiences')}>Experiences</Nav.Link>
            <Nav.Link href="/#projects"className={activeLink ==='projects'? 'active navbar-link': 'navbar-link'}onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="/#contacts"className={activeLink ==='contacts'? 'active navbar-link': 'navbar-link'}onClick={()=> onUpdateActiveLink('contacts')}>Contact</Nav.Link>
            
          </Nav>

          {/* social icon */}
          <span className="navbar-text">
            <div className="social-icon hide">
                <a href="https://www.linkedin.com/in/myo-myo-khant/" target='__blank'><img src={navIcon1} alt="My LinkedIn Account"/></a>
                <a href="https://github.com/Ms-Myo-Myo-Khant" target='__blank'><img src={navIcon2} alt="My Github Account"/></a>
                <a href="mailto:myokhant122021@gmail.com"><img src={navIcon3} alt="My Gmail"/></a>
            </div>
          <HashLink to={resume} target='__blank'>
             <button className="vvd"><span>Resume</span></button>
            </HashLink>
          
           <HashLink to={book} target='__blank'>
             <span> </span>
            </HashLink>
          </span>
      
      </Container>
    </Navbar>
    
  );
}

export default Navigation;