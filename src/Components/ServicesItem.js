import React from 'react';
import ServicesItemIcon from './ServicesItemIcon';
import '../Styles/services.css';
import ServicesItemText from './ServicesItemText';
import Fade from 'react-reveal/Fade';

function ServicesItem() {
  return (
    <div className="services-item">
      <Fade left duration={1200}>
        <div className="services-list item-one">
          <ServicesItemIcon icons={<i className="fas fa-laptop-code"></i>} />
          <ServicesItemText title={'Website Design'} text={'3 Projects'} />
        </div>
      </Fade>
      <Fade left duration={1300}>
        <div className="services-list item-two">
          <ServicesItemIcon icons={<i className="fas fa-code"></i>} />
          <ServicesItemText title={'Website Apps'} text={'10 Projects'} />
        </div>
      </Fade>
      <Fade left duration={1400}>
        <div className="services-list item-three">
          <ServicesItemIcon icons={<i className="fab fa-react"></i>} />
          <ServicesItemText title={'ReactJS Apps'} text={'5 Projects'} />
        </div>
      </Fade>
    </div>
  );
}

export default ServicesItem;
