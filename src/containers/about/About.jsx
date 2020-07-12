import React, { useEffect, useState} from "react";
import ReactDom from "react-dom";
import { Typography } from "@material-ui/core";
import forest from "../../resources/img/study10.png";
import parallax from "./parallax";
import "./About.css";

const About = () => {
  

  useEffect(() => {
    console.log("renderizado")
    const contenedor = document.getElementById("scene");
    const div = React.createElement(
      "div",
      {},
      <img src={forest} alt="forest" className="forest" />
    );
    const div3 = React.createElement(
      "div",
      { className: "cont-typo-about" },
      
      <div>
      <div className="overlay-about"></div>
      <div className="cont-title-about">
        <Typography variant="h4" className="titulo">
          Sobre mi.
        </Typography>
        <Typography variant="body2" className="contenido">
          Hola, soy Abraham Vidal, estudiante de la carrera de Ingeniería en Informática y desarrollador ReactJs.
          Como desarrollador Web Junior, me encantaria poder formar parte de una empresa en donde pueda aplicar todos mis conocimientos
          , y al mismo tiempo, que me permita desarrollarme profesionalmente.
          Me apasiona programar, lo que me llevo a aprender de manera autodidacta.
        </Typography>
        </div>
      </div>
    );
    // const div2 = React.createElement(
    //   "div",
    //   {},
    //   <div className="moon-nigth"></div>
    // );
    let elements = [];
    for (let i = 0; i < 350; i++) {
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let size = Math.random() * 2;
      let duration = Math.random() * 10;

      var element = React.createElement("i", {
        className: "star",
        style: {
          left: x + "px",
          top: y + "px",
          width: size + "px",
          height: size + "px",
          animationDuration: 5 + duration + "s",
          animationDelay: duration + "s",
        },
      });
      elements.push(element);
    }
    var container = React.createElement("div", { className: "scene" }, [
      div,
      // div2,
      div3,
      elements,
    ]);

    ReactDom.hydrate(container, contenedor);
  }, []);
  //  useEffect(() => {
   
  

  return <div className="scene" id="scene"></div>;
};

export default About;
