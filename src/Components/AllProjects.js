import Navigation from './Navigation';
import { Container,Row,Col ,Table} from "react-bootstrap";
import openicon from "../assets/img/tab.svg";
import { Footer } from './Footer';

export const AllProjects =()=>{

    const projects = [
    {
      title: "Hi-find : Lost & Found Portal",
      year:2023,
      language :["Python","Django","NodeJs","Html","MySQL"],
      link: "https://github.com/Ms-Myo-Myo-Khant/hi-find",
    },
    {
      title: "I-mage : Image Processing Application",
      year:2023,
      language :["Python","OpenCV","Tkinter"],
      link :"https://github.com/Ms-Myo-Myo-Khant/I-mage-Main",
    },
    {
      title: "Ecommerce Consumer Behavioral Analysis",
      year:2023,
      language :["Python","Apache PySpark","Postgre SQL"],
      link:"https://github.com/Ms-Myo-Myo-Khant/e-commerce-behavioral-analysis",
    },
    {
      title: "Speech Recognition and Smart Door Lock System ",
     year:2020,
     language :["Python","Face Recognition","Voice Recognitoin","Rasberry PI"],
      link:"https://github.com/Ms-Myo-Myo-Khant/Smart-Home",
    },
    {
      title: "Ferry Management System",
     year:2019,
     language :["PHP","Bootstrap","MySQL","HTML"],
      link:null,
    },
    {
      title: "Smart Robotic Car",
     year:2019,
     language :["C","Ardunio","3D Modelling","2D Design"],
      link:"https://github.com/Ms-Myo-Myo-Khant/Robotic-Car",
    },
    {
      title: "University Search Engine",
     year:2018,
     language :["Java","MySQL"],
      link:null,
    },
    {
      title: "Ran Rangoon : Yangon Guide",
     year:2018,
     language :["JavaScript","HTML","CSS","BootStrap"],
      link:null,
    },
    {
      title: "Garbage Collector",
     year:2018,
     language :["C","Ardunio","2D Design"],
      link:"https://github.com/Ms-Myo-Myo-Khant/Garbage-Collector-Arduino-Project",
    },
    {
      title: "Drawing Machine",
     year:2018,
     language :["C","Ardunio","2D Design","Hardware Design","Making"],
      link:"https://github.com/Ms-Myo-Myo-Khant/Drawing-Machine",
    },
    {
      title: "Library Management System",
     year:2017,
     language :["C++"],
      link:null,
    },
  ];
    return(
        <>
        <Navigation/>
        <Container className='archive'>
        <Row>
            <h2 className="archiveTitle">Archived Projects</h2>
        <span className="archivesubText">A big list of things I’ve worked on</span>
        </Row>
        <Row>
                <Table hover variant="dark">
                <thead>
                
                    <tr>
                    <th>Year</th>
                    <th>Title</th>
                    <th>Built with</th>
                    <th>GitHub Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                projects.map((project,index)=>{
                    return(
                    <tr key={index}>
                    <td className='year'>{project.year}</td>
                    <td className='protitle'>{project.title}</td>
                    <td className='lang'> {
                         project.language.map((lang1,index)=>{
                        return(<code key={index} >{lang1}.</code> )}
                        )
                        }
                    </td>
                    <td className='glink'>
                        {project.link !== null ? (
                            <a href={project.link} target="_blank"><img src={openicon} alt="Open Icon" /></a>
                        ) : null}
                        </td>
                    </tr>
                
                    )}
                    )
                }
                  
                </tbody>
                </Table>
        </Row>
       </Container>
        <Footer/>
        </>
    )
}