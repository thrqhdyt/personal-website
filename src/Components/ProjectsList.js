import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  Project1  from '../image/projects/Project1.png';
import  Project2  from '../image/projects/Project2.png';
import  Project3  from '../image/projects/Project3.png';
import  Project4  from '../image/projects/Project4.png';
import  Project5  from '../image/projects/Project5.png';

export class ProjectsList extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: false,
      infinite: false,
      slidesToShow: 2.45,
      slidesToScroll: 1,
    };
    return (
      <div className="wrap-project">
        <Slider {...settings}>
          <div className="image-projects">
            <img src={Project1} alt="img-project-list" />
          </div>
          <div className="image-projects">
            <img src={Project2} alt="img-project-list" />
          </div>
          <div className="image-projects">
            <img src={Project3} alt="img-project-list" />
          </div>
          <div className="image-projects">
            <img src={Project4} alt="img-project-list" />
          </div>
          <div className="image-projects">
            <img src={Project5} alt="img-project-list" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ProjectsList;
