//for carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//for Progress Bar
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills(){

// imported code for carousel responsive
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return(
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>My Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <div className="probar">
                                    <CircularProgressbar
                                        value={85}
                                        text={`70%`}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                        backgroundColor: "#000",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                        })}/>
                                </div>
                                <h5>Backend</h5>
                            </div>
                            <div className="item">
                                <div className="probar">
                                    <CircularProgressbar
                                        value={70}
                                        text={`70%`}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                        backgroundColor: "#000",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                        })}/>
                                </div>
                                <h5>Frontend</h5>
                            </div>
                            <div className="item">
                                <div className="probar">
                                    <CircularProgressbar
                                        value={60}
                                        text={`60%`}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                        backgroundColor: "#000",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                        })}/>
                                </div>
                                <h5>Project Management</h5>
                            </div>
                            <div className="item">
                                <div className="probar">
                                    <CircularProgressbar
                                        value={70}
                                        text={`70%`}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                        backgroundColor: "#000",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                        })}/>
                                </div>
                                <h5>SEO</h5>
                            </div>
                            <div className="item">
                                <div className="probar">
                                    <CircularProgressbar
                                        value={80}
                                        text={`80%`}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                        backgroundColor: "#000",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                        })}/>
                                </div>
                                <h5>Data Analysis</h5>
                            </div>
                            <div className="item">
                                <div className="probar">
                                    <CircularProgressbar
                                        value={80}
                                        text={`80%`}
                                        background
                                        backgroundPadding={6}
                                        styles={buildStyles({
                                        backgroundColor: "#000",
                                        textColor: "#fff",
                                        pathColor: "#fff",
                                        trailColor: "transparent"
                                        })}/>
                                </div>
                                <h5>UI/UX Design</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;