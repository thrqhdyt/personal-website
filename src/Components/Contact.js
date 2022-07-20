import React from 'react';
import '../Styles/contact.css';
import ContactItem from './ContactItem';
import phone from '../image/phone.svg';
import email from '../image/emailme.svg';
import Fade from 'react-reveal/Fade';


function Contact() {
  return (
    <div className="contact" id='contact'>
      <h2>Contact</h2>
      <p>Have any project in mind? Say Hello at </p>
      <div className="contact-item">
        <Fade left duration={1200}>
          <div className="contact-maps">
            <iframe
              title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125778.99249539108!2d107.58954322483496!3d-6.893659858504168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1658132795246!5m2!1sid!2sid"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Fade>
        <div className="contact-section">
          <Fade right>
            <ContactItem icon={phone} title={'Phone'} text1={'+62 822 1877 2230'} />
          </Fade>
          <Fade right>
            <ContactItem icon={email} title={'Email'} text1={'thoriq1130@gmail.com'} />
          </Fade>
          <Fade bottom duration={1500}>
            <div className="contact-icons">
              <a href="https://www.instagram.com/thoriqhdyt_/">
                <i className="fab fa-instagram-square"></i>
              </a>
              <a href="https://twitter.com/ThoriqhDayat">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="https://github.com/thrqhdyt">
                <i className="fab fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/thoriq-hidayat-9199b8245/">
              <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Contact;
