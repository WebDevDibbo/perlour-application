import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../../assets/images/hero.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hero} className="max-w-sm rounded-lg shadow-2xl" alt='hero-img'/>
          <div>
            <h1 className="text-5xl font-bold hero-heading max-w-[460px] ">BEAUTY SALON FOR EVERY WOMEN</h1>
            <p className="py-6 max-w-[600px]">I'm Jerin.I'm a beautician,youtuber and freelancer.I love and enjoy my work.My Dream is to make a great impact on my parlour and also enrich my knowledge by exploring new things.</p>
            <button className="btn login-btn border-0 px-10 py-3 ">Get an Appointment</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;