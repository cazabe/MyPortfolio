import React from "react";
import GlobalBtn from "../buttons/globalBtn";
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
                    <GlobalBtn url={projectLink} text={"Mira mi proyecto en Github"} btnWidth={"100%"} customFont={"14px"} />
                </div>
            </div>
        </>
    )
}

export default ProjectCard;