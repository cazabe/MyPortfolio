import React from "react";
import './projectCard.css';

const ProjectCard = ({ srcImg, title, text, projectLink }) => {
    return (
        <>
            <div className="col-md-4 col-xs-12">
                <div className="project-container project-card">
                    <img
                        src={srcImg}
                        alt="expense-tracker"
                        loading="lazy"
                        className="project-pic"
                    />
                    <h2 className="project-title">{title}</h2>
                    <p className="project-details">
                        {text}
                    </p>
                    <a href={projectLink} target="_blank" rel="noreferrer">
                        <div className="mb-4 my-button col-md-3 col-xs-12" style={{ width: "100%", fontSize: "14px" }}>
                            <strong>Mira el proyecto en Github</strong>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;