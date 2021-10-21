import React from "react";
import programmer from '../../../Assets/hacker.png';
import "./nav.css";


const NavComponent = () => {
    return (
        <nav className="container navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href><img style={{height:"45px"}} src={programmer} alt="made by freepik.com from Flaticon"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href>Sobre mí</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default NavComponent;