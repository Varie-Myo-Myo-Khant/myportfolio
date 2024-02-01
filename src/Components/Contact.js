import { useState,useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Contact=() =>{

    

    // for mail input
    const formInitialDetails={
        name:'',
        email:'',
        phone:'',
        message:''
    }

    const [formDetails,setFormDetails]=useState(formInitialDetails);
    const [buttonText, setButtonText]=useState('Send');
    const [status,setStatus]=useState({});

    const onFormUpdate= (inuptType,value) =>{
        setFormDetails({
            ...formDetails,[inuptType]:value
        })
    }

   const handleSubmit = async (e) => {

    // EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_tpyx6yx';
    const templateId = 'template_8yamu52';
    const publicKey = 'WRF880nNCOK_tqskO';
    e.preventDefault();
    setButtonText("Sending ...");


    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
     const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: formDetails.name,
        from_email: formDetails.email,
        to_name: 'My Portfolio',
        message: formDetails.message,
        phone:formDetails.phone,
      }
    };

     // Send the email using EmailJS
    try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: 'The email has send sucessfully! Thank you!' });

    } catch (error) {
        console.error('Network error:', error);
        setStatus({ success: false, message: 'Network error. Please check your connection.' });
      
        
    } finally {
        setButtonText("Send");
        
    }
};



// for email alert
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        setShow(false);
    };
    useEffect(() => {
        if (status.message && status.message.trim() !== '') {
            setShow(true);
        }
        }, [status.message]);


    return(
        <section className="contact" id="contacts">
            <Container className="contactContainer">
                <Row className="align-iterms-center">
                    <span className="expText">Get In Touch,</span>
                    <h2 className="sectionTitle">Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <input className="formInput" type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name',e.target.value)}/>
                    <br/>

                        <input className="formInput" type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email',e.target.value)}/>
                    
                     <br/>
                        <input className="formInput" type="text" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone',e.target.value)}/>
                    
                     <br/>
                        <textarea className="formInput" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message',e.target.value)}></textarea>
                    
                     <br/>
                      <button type="submit" className="cBtn"><span>{buttonText}</span></button>
                   
                    </form>
                </Row>
                {
                status.message !== null && (
                
                    <Modal show={show} onHide={handleClose} className="emodal">
                    <Modal.Header closeButton>
                        <Modal.Title>Notification</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{status.message}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                        Close
                        </Button>
                    </Modal.Footer>
                    </Modal>
                
                )
                }

            </Container>
        </section>
        
    )
}