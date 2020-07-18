import React, { useEffect, Fragment, useState } from "react";
import universe from "../../resources/img/planets2.png";
import notSky from "../../resources/img/notSky.png";
import mountaintop from "../../resources/img/mountaintop.png"
import bottomMountain from "../../resources/img/mountainsBottom.png";
import primera from "../../resources/img/primera.png"
import segunda from "../../resources/img/segunda.png"
import tercera from "../../resources/img/tercera.png"
import cuarta from "../../resources/img/cuarta.png"
import quinta from "../../resources/img/quinta.png"
import sexta from "../../resources/img/sexta.png"
import "./About.css";
import { Stars, Card, Contact } from "./components";

const About = (props) => {
  const { me, card, contact} = props;


  return (
    <div className="scene">
      <div className="backImg">
        <img src={universe} alt="universe"></img>
      </div>
      <Stars /> 
       <div>
      <img src={primera}  style={{  zIndex: 1100 }} alt="primera" className="primera" />
      </div>
      <Card card={card}/>
      <Contact contact={contact}/>
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
      </div>  
    </div>
   
  );
};

export default About;
