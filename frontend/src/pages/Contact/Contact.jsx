import { useState } from 'react';
import './Contact.css'

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email sending logic here
    // For example, you can use EmailJS or a backend API to send the email
    console.log('Email sent successfully!');
    setSuccess(true);
  };

  return (
    <div className="contact-us-container"  id='contact-us'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      {success && <p>Thank you for contacting us! We will get back to you soon.</p>}
    </div>
  );
};

export default ContactUs;