import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="row">
      <section className="projects" id="projects">
        <h2 className="projects-title">Algunos de mis proyectos</h2>
        <div className="projects-container">
          <div className="col-md-4 col-xs-12">
            <div className="project-container project-card">
              <img
                src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding.jpg"
                alt="expense-tracker"
                loading="lazy"
                className="project-pic"
              />
              <h3 className="project-title">Expense Tracker</h3>
              <p className="project-details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                ratione vel inventore labore commodi modi quos culpa aut saepe!
                Alias!
              </p>
              <a
                href="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding.jpg"
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Check it Out
              </a>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="project-container project-card">
              <img
                src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding.jpg"
                alt="netflic-clone"
                loading="lazy"
                className="project-pic"
              />
              <h3 className="project-title">Netflix Clone</h3>
              <p className="project-details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                ratione vel inventore labore commodi modi quos culpa aut saepe!
                Alias!
              </p>
              <a
                href="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding.jpg"
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Check it Out
              </a>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="project-container project-card">
              <img
                src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding.jpg"
                alt="greeny-earth"
                loading="lazy"
                className="project-pic"
              />
              <h3 className="project-title">Greeny Earth</h3>
              <p className="project-details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                ratione vel inventore labore commodi modi quos culpa aut saepe!
                Alias!
              </p>
              <a
                href="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/01/20133422/software-developer-coding.jpg"
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Check it Out
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
