import React from 'react';
import pg1 from '../assets/images/pg1.png'; // Ensure the correct path to your images
import pg2 from '../assets/images/pg2.png';
import pg3 from '../assets/images/pg3.png';

const projects = [
  {
    id: 1,
    title: 'Waste Wise Web',
    description: 'Waste Wise Web is dedicated to addressing the global waste crisis by providing accurate information on proper waste disposal. Our platform empowers communities to combat misinformation, fostering a collective effort for a cleaner planet.',
    img: pg1
  },
  {
    id: 2,
    title: 'Green Guide',
    description: 'GreenGuide emerges as a solution, addressing the urgent need for afforestation. With each tree planted, we strive to safeguard our environment, ensuring a sustainable future for all.',
    img: pg2
  },
  {
    id: 3,
    title: 'SkillSpire',
    description: 'SkillSpire is a web application which aims to develop a software solution facilitating seamless connections between students and suitable internship opportunities.',
    img: pg3
  }
];

const Portfolio = () => {
  return (
    <section className="bg-dark py-5" id="portfolio">
      <div className="container">
        <h2 className="text-center mb-5 text-white">My Portfolio</h2>
        <div className="row">
          {projects.map(project => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card h-100">
                <img src={project.img} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
