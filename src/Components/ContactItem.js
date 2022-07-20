import React from 'react';

function ContactItem({ icon, title, text1 }) {
  return (
    <div className="contact-list">
      <img src={icon} alt="icon" />
      <div className="right-items">
        <h6>{title}</h6>
        <p>{text1}</p>
      </div>
    </div>
  );
}

export default ContactItem;
