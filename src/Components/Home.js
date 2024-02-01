import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation'
import { Banner } from './Banner';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Header from './Header';
import {Contact} from './Contact';
import { Footer } from './Footer';
export const Home =()=>{
    return (
       <>
      <Header/>
      <Navigation />
      <Banner/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
     </>
    )
}