import '../../index.scss';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { React, useRef } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function ContactForm(props) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_p1cor7p", "template_u2dllbh", form.current, "yhaJaUkUkfWSou52P")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleSubmit = (e) => {
    sendEmail(e);
    props.submitFunc();
  }

  return(
    <div className="ContactForm">
      <div className="ContactForm-blocker"></div>
      <form 
        className="ContactForm-form colors-contact-form" 
        ref={form}      
        onSubmit={handleSubmit}
      >
        
        <h2 className="ContactForm-title">Contact</h2>
        <button
            className="ContactForm-cancel-btn colors-contact-form"
            type="button"
            onClick={props.cancelFunc}
            ><CloseRoundedIcon sx={{ color: "rgb(105, 105, 105)" }}/>
        </button>
        <div className="ContactForm-unit ContactForm-unit-name">
        <label 
          htmlFor="senderName"
          className="ContactForm-label"
          ><h5>NAME</h5>
        </label>
        <input
          className="ContactForm-input ContactForm-input-name"
          type="text"
          id="senderName"
          name="senderName"
          placeholder="name"
          value={form.senderName}
          required
        />
        </div>
        <div className="ContactForm-unit ContactForm-unit-email">
          <label 
            htmlFor="senderEmail"
            className="ContactForm-label"
            ><h5>EMAIL</h5>
          </label>
          <input
            className="ContactForm-input ContactForm-input-email"
            type="email"
            id="senderEmail"
            name="senderEmail"
            placeholder="you@abc.com"
            value={form.senderEmail}
            required
          />
        </div>
        <div className="ContactForm-unit ContactForm-unit-message">
          <label 
            htmlFor="message"
            className="ContactForm-label"
            ><h5>MESSAGE</h5>
          </label>
          <textarea
            className="ContactForm-input ContactForm-input-message"
            type="text"
            id="message"
            name="message"
            placeholder="message"
            value={form.message}
            required
          />
        </div>
        <button
          className="ContactForm-submit-btn colors-contact-form"
          type="submit"
          ><h5><b>SEND</b></h5>
        </button>
      </form>
    </div>

  )
}

export default ContactForm;