import React from 'react';
import '../Styles/services.css';
import ServicesContent from './ServicesContent';
import ServicesItem from './ServicesItem';
import Fade from 'react-reveal/Fade';

function Services() {
  return (
    <div className="services" id="services">
      <ServicesItem />
      <Fade right duration={1500}>
        <ServicesContent />
      </Fade>
    </div>
  );
}

export default Services;
