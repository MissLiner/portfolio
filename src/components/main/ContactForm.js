import '../../index.css';
import './ContactForm.css';
import { send } from 'emailjs-com';

function ContactForm() {
  const [toSend, setToSend] = useState({
    senderName: "",
    senderEmail: "",
    senderPhone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      "service_p1cor7p",
      "template_u2dllbh",
      toSend,
      "yhaJaUkUkfWSou52P",
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value });
  };

  return(
    <form className="ContactForm">
      <label 
        for="senderName"
        className="ContactForm-label"
        >your name:
      </label>
      <input
        className="ContactForm-input"
        type="text"
        id="senderName"
        name="senderName"
        value={toSend.senderName}
        onChange={handleChange}
      />
      <fieldset className="ContactForm-contactfield">
        <legend>should I call or email you?</legend>
        <label 
          for="senderEmail"
          className="ContactForm-label"
          >your email:
        </label>
        <input
          className="ContactForm-input"
          type="email"
          id="senderEmail"
          name="senderEmail"
          value={toSend.senderEmail}
          onChange={handleChange}
        />
        <label 
          for="senderPhone"
          className="ContactForm-label"
          >your phone number:
        </label>
        <input
          className="ContactForm-input"
          type="number"
          id="senderPhone"
          name="senderPhone"
          value={toSend.senderPhone}
          onChange={handleChange}
        />
      </fieldset>
      <label 
        for="message"
        className="ContactForm-label"
        >your message:
      </label>
      <input
        className="ContactForm-input"
        type="text"
        id="message"
        name="message"
        value={toSend.message}
        onChange={handleChange}
      />
      <button
        className="ContactForm-submitbtn"
        type="submit"
        onSubmit={handleSubmit}
        >submit
      </button>
    </form>
  )
}

export default ContactForm;