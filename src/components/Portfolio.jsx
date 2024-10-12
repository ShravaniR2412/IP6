import React from 'react';



const Portfolio = ({ projects }) => {
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
