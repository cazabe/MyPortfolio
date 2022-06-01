import React, { useEffect } from "react";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Contact from "./contact/index";
import programmer from "../../Assets/software_developer.png";
import instagram from "../../Assets/icons8-instagram.gif";
import linkedIn from "../../Assets/icons8-linkedin-circled.gif";
import github from "../../Assets/icons8-github.gif";
import rocket from "../../Assets/icons8-launch.gif";
import Banner from "../Misc/banner";
import CodeVideo from "../../Assets/codeVideo.mp4";


const Content = () => {

  useEffect(() => {
    const scrollUp = document.getElementById("scroll-up");
    scrollUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  })

  return (
    <>
      <Banner video={CodeVideo} />
      <div className="container mt-4">
        <div className="row" id="sobremi">
          <div className="col-md-6 col-xs-12">
            <h1>
              <strong><span style={{ fontFamily: "Orbitron, sans-serif" }}>Hola!</span></strong>
              <br></br>
              <strong><span style={{ fontFamily: "Cinzel, serif", color: "var(--custom-color)" }}>Soy Carlos.</span></strong>
            </h1>
            <p>
              Me gustaría comenzar contando un poco de mi historia y cómo me involucre
              en el mundo de la programación.
              Empecé a programar como una forma de marcar un camino en mi vida y una forma de obtener una nueva habilidad
              que me ayudaria en mi desarrollo profesional ya que no estaba pasando por el mejor momento. Nunca me imagine que despues de ver un tutorial en youtube sobre programación
              haya terminado trabajando como programador y que esto se haya convertido en mi pasión.
            </p>
            <a href="https://drive.google.com/file/d/1bAUvHApRNR48VIoT8uQN-LlFA75CMgzn/view?usp=sharing" target="_blank" rel="noreferrer">
              <div className="mb-4 my-button col-md-3 col-xs-12">
                <strong>Mira mi cv</strong>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xs-12">
            <img
              src={programmer}
              style={{ height: "400px", width: "100%" }}
              alt="programming"
            />
          </div>
        </div>
        <div className="socials">
          <a href="https://www.instagram.com/kamaytech/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" loading="lazy" className="socicon" />
          </a>
          <a href="https://www.instagram.com/kamaytech/" target="_blank" rel="noreferrer">
            <img src={linkedIn} alt="Linkedin" loading="lazy" className="socicon" />
          </a>
          <a href="https://github.com/cazabe" target="_blank" rel="noreferrer">
            <img src={github} alt="Github" className="socicon" />
          </a>
        </div>
        <i className="scroll-up" id="scroll-up">
          <img src={rocket} className="socicon up-arrow" alt="scroll-up" />
        </i>
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default Content;
