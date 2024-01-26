import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
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
    e.preventDefault();
    setButtonText("Sending ...");

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });

        if (response && response.ok) {
            try {
                const result = await response.json();
                setFormDetails(formInitialDetails);

                if (result.code === 200) {
                    setStatus({ success: true, message: 'Message sent successfully' });
                } else {
                    setStatus({ success: false, message: 'Something went wrong, please try again later.' });
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
                setStatus({ success: false, message: 'Failed to parse server response.' });
            }
        } else {
            console.error('Failed to fetch:', response);
            setStatus({ success: false, message: 'Failed to fetch. Please try again later.' });
        }
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