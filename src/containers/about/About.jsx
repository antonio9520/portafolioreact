import React from "react";
import universe from "../../resources/img/planets2.png";
import universexs from "../../resources/img/planetsxs.png";
import primera from "../../resources/img/primera.png";
import segunda from "../../resources/img/segunda.png";
import tercera from "../../resources/img/tercera.png";
import cuarta from "../../resources/img/cuarta.png";
import quinta from "../../resources/img/quinta.png";
import sexta from "../../resources/img/sexta.png";
import arrow from "../../resources/img/arrow.png"
import { Link } from "react-scroll";
import primeraxs from "../../resources/img/primeraxs.png";
import "./About.css";
import { Stars, Card, Contact } from "./components";
import { BtnLink } from "../../components";

const About = (props) => {
  const { card, contact } = props;

  return (
    <div className="scene">
      <div className="backImg">
        <img src={universe} alt="universe"></img>
      </div>
      <div className="backImgxs">
        <img src={universexs} alt="universe"></img>
      </div>
      <div>
        <img
          src={primeraxs}
          alt="segunda"
          style={{ zIndex: 1090 }}
          className="primeraxs"
        />
      </div>

      <Card card={card} />
      <Contact contact={contact} />
     
      {/* <Stars />

      <div>
        <img
          src={primera}
          style={{ zIndex: 1100 }}
          alt="primera"
          className="primera"
        />
      </div>

      <div>
        <img
          src={segunda}
          alt="segunda"
          style={{ zIndex: 1090 }}
          className="segunda"
        />
      </div>
      <div>
        <img
          src={tercera}
          alt="tercera"
          style={{ zIndex: 1080 }}
          className="tercera"
        />
      </div>
      <div>
        <img
          src={cuarta}
          alt="cuarta"
          style={{ zIndex: 1070 }}
          className="cuarta"
        />
      </div>
      <div>
        <img
          src={quinta}
          alt="quinta"
          style={{ zIndex: 1060 }}
          className="quinta"
        />
      </div>
      <div>
        <img
          src={sexta}
          alt="sexta"
          style={{ zIndex: 1050 }}
          className="sexta"
        />
      </div>  */}

      <div className="arrow-about">
      <Link
          activeClass="active"
          className="link"
          to="experience"
          spy={true}
          offset={50}
          duration={500}
        >
           <img src={arrow} alt="arrow"></img>
        </Link>
      
      </div>
    </div>
  );
};

export default About;
