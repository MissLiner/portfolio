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
    <form 
      className="ContactForm colors-contact-form" 
      ref={form}      
      onSubmit={handleSubmit}
    >
      <h3 className="ContactForm-title">Contact</h3>
      <button
          className="ContactForm-cancel-btn"
          type="button"
          onClick={props.cancelFunc}
          ><CloseRoundedIcon />
      </button>
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
      {/* <div className="ContactForm-btns"> */}
        <button
          className="ContactForm-submit-btn"
          type="submit"
          ><h4>SEND</h4>
        </button>
      {/* </div> */}
    </form>
  )
}

export default ContactForm;