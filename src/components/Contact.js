import { response } from 'express';
import  { useState } from 'react';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
const formInitailDetails = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
}

const [formDetails, setFormDetails] =useState(formInitailDetails);
const [buttonText, setButtonText] = useState('Send');
const [status, setStatus] = useState({});

const onFormUpdate = (category, value) => {
    setFormDetails({
        ...formDetails,
        [category]: value,
    }
    )
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending....');
    let reponse = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let reult = response.json();
    setFormDetails(formInitailDetails);
    if(result.code === 200){
        setStatus({ success: true, message: "Message sent successfully"});
    } else {
        setStatus({ success:false, message: 'Something went wrong, please try again later'})
    }
};

return (
    <section className='contact' id="contact">
        <Container>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                </Col>
                <Col sm={6} className="px-1">
                     <input type="text" value={formDetails.firstname} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                </Col>
                <Col sm={6} className="px-1">
                     <input type="text" value={formDetails.lastname} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                </Col>
                <Col sm={6} className="px-1">
                     <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                </Col>
                <Col sm={6} className="px-1">
                     <input type="tel" value={formDetails.phone} placeholder="Contact Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                </Col>
                <Col sm={6} className="px-1">
                     <textarea row="6" value={formDetials.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                     <button type='submit'><span>{buttonText}</span></button>
                </Col>
                {
                    status.message &&
                    <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                    </Col>
                }
            </Row>
            </form>
        </Container>
    </section>
)
}