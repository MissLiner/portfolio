import '../../index.css';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { React, useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_p1cor7p", "template_u2dllbh", form, "yhaJaUkUkfWSou52P")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   send(
  //     "service_p1cor7p",
  //     "template_u2dllbh",
  //     toSend,
  //     "yhaJaUkUkfWSou52P",
  //   )
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //     })
  //     .catch((err) => {
  //       console.log('FAILED...', err);
  //     });
  // };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  return(
    <form className="ContactForm">
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
        onChange={handleChange}
      />
      <div className="ContactForm-contactfield"
        >should I call or email you?
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
            onChange={handleChange}
          />
        </div>
        <div className="ContactForm-input-unit">
          <label 
            htmlFor="senderPhone"
            className="ContactForm-label"
            >call me:
          </label>
          <input
            className="ContactForm-input"
            type="number"
            id="senderPhone"
            name="senderPhone"
            placeholder="(xxx) xxx-xxxx"
            value={form.senderPhone}
            onChange={handleChange}
          />
        </div>
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
          onChange={handleChange}
        />
      </div>
      <button
        className="ContactForm-submitbtn"
        type="submit"
        onSubmit={sendEmail}
        >submit
      </button>
    </form>
  )
}

export default ContactForm;