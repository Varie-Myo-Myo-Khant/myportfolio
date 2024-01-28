import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";

// importing libraries for animation
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import bannerImage from "../assets/img/mypp.jpg";


export const Banner = () =>{

    //to keep track of rotated text index
    const [loopNum,setLoopNum]= useState(0);
    // to check the state of text deleting
    const [isDeleting,setDeleting]=useState(false);
    //to rotate postions
    const toRotate=["Backend Developer", "Software Development", "Web Director"];
    //current position
    const [text,setText]=useState('');
    //delay between character chage
    const [delay,setDelay]=useState(300-Math.random()*100);
    //to keep track the current index of rotated text array.
    const [index,setIndex]=useState(1);
    //total period for animation cycle.
    const period=2000;

    useEffect( ()=>{
        //creating timer called ticker which call tick() function with delay.
        let ticker=setInterval(()=>{
        tick();
        },delay)
        return ()=>{clearInterval(ticker)}
    },[text])

    const tick =() => {

        //to determine current text to animate.
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        //checking the current text is being deleted
        let updateText=isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        //setting the updated text to text which is currently displayed.
        setText(updateText);

        //adjusting delay for typing effect when deleting
        if (isDeleting){
            setDelay(prevDelay =>prevDelay/2);
        }

        //check to switch the next role and reseting the control variables.
        if(!isDeleting && updateText===fullText){
            setDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelay(period);
        }
        //check to switch next role after deleting
        else if(isDeleting && updateText ===''){
            setDeleting(false);
            setLoopNum(loopNum+1);
            setIndex(1);
            setDelay(500);
        }else{
            //increment to index if neither deleting nor adding.
            setIndex(prevIndex => prevIndex+1);
        }
    }
    
    return(
        <section className="banner" id="home">
            <Container className="align-items-center">
                <Row>
                    {/* for left section */}
                    <Col>
                        {/* using track visibility to use animation libraries */}
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible? "animate__animated animate__fadeIn" :""}>
                        <span className="tagline">Hi, My name is </span>
                        <h1>{`Myo Myo Khant`}
                        {/* for role animation */}
                        <span className="txt-rotate" dataPeriod="1000" data-rotate='["Backend Developer", "Software Development", "Web Director"]'>
                        <br/>
                        <span className="wrap">{text}</span></span></h1>
                        <p>
                            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
                            Currently, I’m focused on building accessible, human-centered products.
                        </p>
                        {/* Using boostrap icons */}
                        <button onClick={()=>console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                        </div>
                   }
                   </TrackVisibility>
                    </Col>
                    {/* <Col>
                    <img src={bannerImage}/>
                    </Col> */}
               </Row>
            </Container>
        </section>
    )
}