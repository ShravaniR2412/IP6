import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

 

  return (
    <section className="bg-primary text-white text-center d-flex align-items-center" style={{ height: '400px' }}>
      <div className="container">
        <h1 className="display-4">Welcome to My Profile</h1>
        <h2>Hey there! Shravani Rasam here</h2>
        <p className="lead">Full Stack Developer | Programmer | AI-ML Enthusiast</p>
      </div>
    </section>
  );
};

export default Hero;
