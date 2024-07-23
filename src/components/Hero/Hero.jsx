import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in the town</span>
        </div>
        <div className='hero-text'>
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal Body</span>
                <span>Today</span>
            </div>
            <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest
                </span>
            </div>

            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>Members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness Programs</span>
                </div>
            </div>

            <div className='hero-buttons'>
                <Link to="/get-started" className='btn'>
                    Get Started <i className="fas fa-arrow-right"></i>
                </Link>
                <button className='btn'>Learn More</button>
            </div>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>

        <div className="heart_rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
        </div>
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back' />
      </div>
    </div>
  );
};

export default Hero;