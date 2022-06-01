import React from "react";
import ProjectCard from "../../Misc/ProjectCard";
import mochisImg from '../../../Assets/mochi-phone.png';
import covidTracker from "../../../Assets/covid-tracker.png";
import rikuna from "../../../Assets/rikuna_crm.png";
import ApiUpload from '../../../Assets/file-upload.png';
import "./projects.css";

const Projects = () => {
  return (
    <div className="row" id="proyectos">
      <section className="projects" id="projects">
        <h1 className="projects-title">
          <strong><span style={{ fontFamily: "Orbitron, sans-serif" }}>Algunos de</span></strong>
          <strong><span style={{ fontFamily: "Cinzel, serif", color: "var(--custom-color)" }}> Mis Proyectos</span></strong>
        </h1>
        <div className="projects-container">
          <ProjectCard srcImg={rikuna} title={"Rikuna"} text={"Un pequeño software de administración para un emprendimieto de comida, realizado con React y Node. "} projectLink={"https://github.com/cazabe/rikuna_crm"} />
          <ProjectCard srcImg={ApiUpload} title={"File Mannager"} text={"Una api de uso general para manejar subida de archivos, realizado con Node y Express."} projectLink={"https://github.com/cazabe/simple_file_upload_node"} />
          <ProjectCard srcImg={covidTracker} title={"Covid Tracker"} text={"Un rastreador de los casos de Covid  a nivel mundial, realizado con react, los datos se saco de covid19api.com."} projectLink={"https://github.com/cazabe/covidTrackerChallenge"} />
          <ProjectCard srcImg={mochisImg} title={"Mochis App"} text={"Una simple app móvil para el manejo de inventario para un emprendieminto de postres, realizada con Flutter."} projectLink={"https://github.com/cazabe/mochis_tools"} />
        </div>
      </section>
    </div>
  );
};

export default Projects;
