import React from "react";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Contact from "./contact/index";
import programmer from "../../Assets/software_developer.png";
import youtube from "../../Assets/icons8-youtube-logo.gif";
import instagram from "../../Assets/icons8-instagram.gif";
import linkedIn from "../../Assets/icons8-linkedin-circled.gif";
import github from "../../Assets/icons8-github.gif";

const Content = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 col-xs-12">
          <h1>
            <strong>Hola, soy Carlos.</strong>
          </h1>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="mb-4 my-button">
            <a href="/images/myw3schoolsimage.jpg" download>
              <strong>Descarga mi cv</strong>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-xs-12">
          <img
            src={programmer}
            style={{ height: "400px", width: "100%" }}
            alt="programming"
          />
        </div>
      </div>
      <div class="socials">
        <a href="#" target="_blank">
          <img src={youtube} alt="Twitter" loading="lazy" class="socicon" />
        </a>
        <a href="#" target="_blank">
          <img src={instagram} alt="Instagram" loading="lazy" class="socicon" />
        </a>
        <a href="#" target="_blank">
          <img src={linkedIn} alt="Linkedin" loading="lazy" class="socicon" />
        </a>
        <a href="#" target="_blank">
          <img src={github} alt="Github" class="socicon" />
        </a>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Content;
