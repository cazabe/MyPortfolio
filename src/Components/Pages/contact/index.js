import React from "react";
import { ReactComponent as ContactImg } from '../../../Assets/get-in touch.svg';
import ReusableCard from "../../Misc/contactCard/contcatCard";
import location from "../../../Assets/location.png";
import phone from "../../../Assets/phone.png";
import email from "../../../Assets/email.png";
import "./contact.css";

const Contact = () => {
  return (
    <section className="mt-4">
      <h1 className="text-center" style={{ fontFamily: "Cinzel, serif", color: "var(--custom-color)" }}><strong>Contactame <span style={{ color: "#000" }}>!</span></strong></h1>
      <div className="row">
        <div className="col-md-6 col-xs-12 col-sm-12">
          <ContactImg />
        </div>
        <div className="col-md-6 col-xs-12 col-sm-12">
          <ReusableCard text={"Dirección"} icon={location} />
          <ReusableCard text={"+593969873684"} icon={phone} />
          <ReusableCard text={"cazcarlos@hotmail.com"} icon={email} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
