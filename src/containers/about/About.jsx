import React, { useEffect, Fragment, useState } from "react";

import universe from "../../resources/img/planets2.png";
import notSky from "../../resources/img/notSky.png";
import bottomMountain from "../../resources/img/mountainsBottom.png";
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
      <img src={notSky}  style={{  zIndex: 1500 }} alt="house" className="house" />
      </div>
      <Card card={card}/>
      <Contact contact={contact}/>
      {/* <div>
        <img
          src={bottomMountain}
          alt="mountainBottom"
          style={{  zIndex: 1500 }}
          className="bottomMountain"
          id="mountain-bottom"
        />
      </div> */}
    </div>
  );
};

export default About;
