import React, { useEffect, Fragment, useState } from "react";

import universe from "../../resources/img/planets2.png";
import notSky from "../../resources/img/notSky.png";
import mountaintop from "../../resources/img/mountaintop.png"
import bottomMountain from "../../resources/img/mountainsBottom.png";
import primera from "../../resources/img/primera.png"
import segunda from "../../resources/img/segunda.png"
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
          style={{  zIndex: 1000 }}
          className="segunda"
          id="mountain-bottom"
        />
      </div> 
      {/* <div>
        <img
          src={bottomMountain}
          alt="mountainBottom"
          style={{  zIndex: 1500 }}
          className="bottomMountain"
          id="mountain-bottom"
        />
      </div>  */}
    </div>
  );
};

export default About;
