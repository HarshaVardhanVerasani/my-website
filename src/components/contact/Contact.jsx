import { BsWhatsapp } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import Reveal from "../framermotion/Reveal";
import "./contact.css";
const Contact = () => {
  return (
    <Reveal>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2 style={{ color: "var(--color-primary)" }}>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <SiMinutemailer size={"1.4em"} />
              <h4>Email</h4>
              <h5>harshavardhan81795@gmail.com</h5>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTMXgJFbXVKsZlTcCGDBwzPtWspRXZJKSncDGGxNQjRNmlwwWXwxfqFjXGgXQJVgNXklzL"
                target="__blank"
                className="text-light"
              >
                Send Message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp size={"1.4em"} />
              <h4>What's App</h4>
              <h5>Harsha</h5>
              <a
                href="https://api.whatsapp.com/send?phone=8179544072"
                target="__blank"
                className="text-light"
              >
                Send Message
              </a>
            </article>
          </div>
          {/* form control */}
          <form action="https://formspree.io/f/xqkorezr" method="POST" className="form">
            <input type="text" name="name" placeholder="Full Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea name="message" cols="30" rows="10" placeholder="want to say something" required></textarea>
            <button className="btn btn-primary">Send</button>
          </form>
        </div>
      </section>
    </Reveal>
  );
};

export default Contact;
