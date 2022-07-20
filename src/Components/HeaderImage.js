import React from 'react';
import '../Styles/header.css';
import ProfileImage from '../image/profile.png';

function HeaderImage() {
  return (
    <div className="content-image">
      <img src={ProfileImage} alt="profile" />
    </div>
  );
}

export default HeaderImage;
