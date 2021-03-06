import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = ({ setAlertContact }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_d60sxoc",
      "template_681n8e4",
      form.current,
      "M239YDC-CvoNbxojI"
    );

    e.target.reset();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAlertContact(true);
    setTimeout(() => {
      setAlertContact(false);
    }, 2000);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>sauravdutta1270@gmail.com</h5>
            <a
              href="mailto:sauravdutta1270@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Instagram</h4>
            <h5>sauravdope24x7</h5>
            <a
              href="https://www.instagram.com/sauravdope24x7/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+919365886989</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919365886989"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={(e) => {
            sendEmail(e);
            handleClick(e);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
