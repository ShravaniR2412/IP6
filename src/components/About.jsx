import React from 'react';
import AboutImg from '../assets/images/image.png';

const About = () => {
  return (
    <section className="py-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="card p-4 shadow-lg border-0">
              <h2 className="card-title mb-4">About Me</h2>
              <p className="card-text">
                Welcome to my GitHub profile! I'm Shravani Shankar Rasam, a passionate Full-Stack Developer based in Navi Mumbai, India.
                I am also an AI-ML enthusiast and an inquisitive learner. Ready to explore the WORLD OF TEC!
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src={AboutImg} alt="Profile" className="img-fluid rounded-circle shadow-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
