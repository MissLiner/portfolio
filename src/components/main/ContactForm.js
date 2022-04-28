import '../../index.css';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { React, useRef } from 'react';

function ContactForm() {

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

  return(
    <form 
      className="ContactForm" 
      ref={form}      
      onSubmit={sendEmail}>
      <h3 className="ContactForm-title">Contact</h3>
      <label 
        htmlFor="senderName"
        className="ContactForm-label"
        >your name:
      </label>
      <input
        className="ContactForm-input"
        type="text"
        id="senderName"
        name="senderName"
        value={form.senderName}
      />
      <div className="ContactForm-input-unit">
        <label 
          htmlFor="senderEmail"
          className="ContactForm-label"
          >email me:
        </label>
        <input
          className="ContactForm-input"
          type="email"
          id="senderEmail"
          name="senderEmail"
          placeholder="you@abc.com"
          value={form.senderEmail}
        />
      </div>
      <div className="ContactForm-input-unit">
        <label 
          htmlFor="message"
          className="ContactForm-label"
          >your message:
        </label>
        <input
          className="ContactForm-input"
          type="text"
          id="message"
          name="message"
          value={form.message}
        />
      </div>
      <button
        className="ContactForm-submitbtn"
        type="submit"
        >submit
      </button>
    </form>
  )
}

export default ContactForm;