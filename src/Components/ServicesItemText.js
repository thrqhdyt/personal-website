import React from 'react';
import '../Styles/services.css';

function ServicesItemText({ title, text }) {
  return (
    <div className="services-text">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default ServicesItemText;
