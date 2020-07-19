import React  from "react";
import universe from "../../resources/img/planets2.png";
import universexs from "../../resources/img/planetsxs.png";
import primera from "../../resources/img/primera.png";
import segunda from "../../resources/img/segunda.png";
import tercera from "../../resources/img/tercera.png";
import cuarta from "../../resources/img/cuarta.png";
import quinta from "../../resources/img/quinta.png";
import sexta from "../../resources/img/sexta.png";
import primeraxs from "../../resources/img/primeraxs.png";
import "./About.css";
import { Stars, Card, Contact } from "./components";
import { BtnLink } from "../../components"

const About = (props) => {
  const { me, card, contact } = props;

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
      <BtnLink p="" link="experience" />
      {/*  <Stars />

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
          style={{  zIndex: 1090 }}
          className="segunda"
          id="mountain-bottom"
        />
      </div> 
      <div>
        <img
          src={tercera}
          alt="tercera"
          style={{  zIndex: 1080 }}
          className="tercera"
          id="mountain-bottom"
        />
      </div> 
      <div>
        <img
          src={cuarta}
          alt="cuarta"
          style={{  zIndex: 1070 }}
          className="cuarta"
          id="mountain-bottom"
        />
      </div> 
      <div>
        <img
          src={quinta}
          alt="quinta"
          style={{  zIndex: 1060 }}
          className="quinta"
          id="mountain-bottom"
        />
      </div> 
      <div>
        <img
          src={sexta}
          alt="sexta"
          style={{  zIndex: 1050 }}
          className="sexta"
          id="mountain-bottom"
        />
      </div>    */}
    </div>
  );
};

export default About;
