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
      <div className="ContactForm-unit ContactForm-unit-name">
      <label 
        htmlFor="senderName"
        className="ContactForm-label"
        >NAME
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
          >EMAIL
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
          >MESSAGE
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
        className="ContactForm-submit-btn"
        type="submit"
        >SEND MESSAGE
      </button>
    </form>
  )
}

export default ContactForm;