import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import { useState } from 'react';

export default function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    try {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log('environment: ',import.meta.env.VITE_WEB3FORMS_ACCESS_KEY)

    // Use environment variable here
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      console.log("Success", data);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  } catch (error) {
    console.error("Error", error);
    setResult("An error occurred. Please try again later.");
  }
  };

  return (
    <>
      <div className="title" id='contact-us'>
        <h2>Contact us</h2>
      </div>
      <div className='contact container'>
        <div className='contact-col'>
          <h3>Send us a message <img src={msg_icon} alt='msg-icon' /></h3>
          <p>Feel free to reach out through contact form or find our contact information below.</p>
          <ul>
            <li><img src={mail_icon} alt='mail-icon' />reach.gsia@gmail.com</li>
            <li><img src={phone_icon} alt='phone-icon' />+91 7349443674</li>
          </ul>
        </div>
        <div className='contact-col col-form'>
          <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' name='name' placeholder='Enter your name' required />

            <label htmlFor='phone'>Phone Number</label>
            <input id='phone' type='tel' name='phone' placeholder='Enter your mobile number' required />

            <label htmlFor='message'>Write your messages here</label>
            <textarea id='message' name='message' rows={6} placeholder='Enter your message here' required />

            <button type='submit' className='btn dark-btn'>Submit<img src={white_arrow} alt='white-arrow' /></button>
          </form>

          <span>{result}</span>

        </div>
      </div>
    </>
  );
}