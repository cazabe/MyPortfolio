import React from "react";
import html from "../../../Assets/icons8-html-5.svg";
import pyhton from "../../../Assets/icons8-python.gif";
import js from "../../../Assets/icons8-javascript.gif";
import node from "../../../Assets/icons8-node-js.svg";
import react from "../../../Assets/icons8-react-native.svg";
import php from "../../../Assets/icons8-php-logo.svg";
import flutter from "../../../Assets/icons8-flutter.svg";
import mysql from "../../../Assets/icons8-mysql-logo.svg";
import "./knowledge.css";

const Skills = () => {
  return (
    <section class="skills" id="skills">
      <h1>
        <strong><span style={{ fontFamily: "Orbitron, sans-serif" }}>Mis</span></strong>
        <strong><span style={{ fontFamily: "Cinzel, serif", color: "var(--custom-color)" }}> Skills</span></strong>
      </h1>

      <div class="skills-wrapper">
        <div class="first-set animate__animated animate__pulse">
          <img src={js} alt="" loading="lazy" class="icon icon-card" />
          <img src={node} alt="" loading="lazy" class="icon icon-card" />
          <img src={react} alt="" loading="lazy" class="icon icon-card" />
          <img src={html} alt="" loading="lazy" class="icon icon-card" />
        </div>

        <div class="second-set animate__animated animate__pulse">
          <img src={pyhton} alt="" loading="lazy" class="icon icon-card" />
          <img src={php} alt="" loading="lazy" class="icon icon-card" />
          <img src={mysql} alt="" loading="lazy" class="icon icon-card" />
          <img src={flutter} alt="" loading="lazy" class="icon icon-card" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
