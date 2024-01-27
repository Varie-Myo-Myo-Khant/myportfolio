import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import axios from 'axios';

export const Contact=() =>{

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
      }
    };

     // Send the email using EmailJS
    try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setFormDetails(formInitialDetails);

       
        
    } catch (error) {
        console.error('Network error:', error);
        setStatus({ success: false, message: 'Network error. Please check your connection.' });
    } finally {
        setButtonText("Send");
    }
};

    return(
        <section className="contact" id="contacts">
            <Container>
                <Row className="align-iterms-center">
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                    <Col md={6} className="px-1">
                        <input type="text" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name',e.target.value)}/>
                    </Col>
                    <Col md={6} className="px-1">
                        <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email',e.target.value)}/>
                    </Col>
                    <Col md={6} className="px-1">
                        <input type="text" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone',e.target.value)}/>
                    </Col>
                    <Col md={6} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message',e.target.value)}></textarea>
                    </Col>
                     <Col size={12} className="px-1">
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                        status.message &&
                        <Col>
                        <p className={status.success === false? "danger" : "success"}>{status.message}</p>
                        </Col>
                    }
                    </form>
                </Row>
                
            </Container>
        </section>
    )
}