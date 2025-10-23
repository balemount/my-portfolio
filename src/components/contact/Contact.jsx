import React from 'react'
import { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "ef0e07fb-c883-45ff-841b-7b69de5031e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      window.alert("Thanks for contacting me! I'll get back to you soon.");
      event.target.reset();
    } else {
      setResult("Error");
      window.alert("Something went wrong with submitting your message. Maybe try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Let's get <span>in touch!</span></h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Reach me here</h1>
                <p>I'm always willing to work and learn new things about UI/UX design, so feel free to send me an email. I'm looking forward to working with you!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                      <h3><FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> damienpontanares28@gmail.com</h3>
                    </div>
                    <div className="contact-detail">
                        <h3><FontAwesomeIcon icon={faPhone} className="contact-icon" /> +63 966 997 5781</h3>
                    </div>
                    <div className="contact-detail">
                        <h3><FontAwesomeIcon icon={faLocationDot} className="contact-icon" /> Manila, Philippines</h3>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Send!</button>
            </form>
        </div>
    </div>
  )
}

export default Contact