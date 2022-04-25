import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai"
import { BsTelegram } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ulqw5bv', 'template_6ti8uos', form.current, 'gOHVR5dBhXFNtpSPm')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };



  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>archoang2012@gmail.com</h5>
            <a href="mailto:archoang2012@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>Message me on Telegram</h5>
            <a href="https://t.me/hoangk2012" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Message me on Linkedin</h5>
            <a href="https://www.linkedin.com/in/kien-hoang-165977139/" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
