import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
// Assuming Calories image is commented out or not used currently

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in the town</span>
        </div>
        {/* Hero heading */}
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

            {/* Figures */}
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

            {/* Hero Buttons */}
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
        {/* hero images */}
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back' />
        
        {/* Calories section is commented out */}
      </div>
    </div>
  );
};

export default Hero;