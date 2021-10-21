import React from "react";
import js from "../../../Assets/js.png"; 
import node from "../../../Assets/node.png";
import python from "../../../Assets/python.png";
import mysql from "../../../Assets/mysql.png";
import linux from "../../../Assets/linux.png";
import flutter from "../../../Assets/flutter.png";
import "./knowledge.css";

const Knowledge = () => {
  return (
    <div className="text-center">
      <h1><strong>Habilidades</strong></h1>
      <div className="row text-center">
        <div className="col-md-1">
            <img className="logos-img" src={js} alt="js"/>
        </div>
        <div className="col-md-1">
            <img className="logos-img" src={node} alt="js"/>
        </div>
        <div className="col-md-1">
            <img className="logos-img" src={python} alt="js"/>
        </div>
        <div className="col-md-1">
            <img className="logos-img" src={mysql} alt="js"/>
        </div>
        <div className="col-md-1">
            <img className="logos-img" src={linux} alt="js"/>
        </div>
        <div className="col-md-1">
            <img className="logos-img" src={flutter} alt="js"/>
        </div>
        <div className="col-md-6 col-xs-12">
            <h3>picture</h3>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
