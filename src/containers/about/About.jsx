import React, { useEffect, Fragment, useState } from "react";
import ReactDom from "react-dom";
import { Typography, IconButton } from "@material-ui/core";
import { Mail, GitHub, Instagram} from "@material-ui/icons";
import forest from "../../resources/img/study10.png";
import "./About.css";

const About = () => {
  
  const contacto = [
    { typo: "", icon: <Mail />, target: "", link: "mailto:antonio.vidal95@hotmail.com" },
    { typo: "", icon: <Mail />, target:"", link: "mailto:abrvc95@gmail.com" },
    { typo: "", icon: <GitHub />, target:"_blank", link: "https://github.com/antonio9520" },
    { typo: "", icon: <Instagram />, target:"_blank", link:"https://www.instagram.com/abraham.antonio95/?hl=es-la" },
  ];
 
  useEffect(() => {
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
            Hola, soy Abraham Vidal, estudiante de la carrera de Ingeniería en
            Informática y desarrollador ReactJs. Como desarrollador Web Junior,
            me encantaria poder formar parte de una empresa en donde pueda
            aplicar todos mis conocimientos , y al mismo tiempo, que me permita
            desarrollarme profesionalmente. Me apasiona programar, lo que me
            llevo a aprender de manera autodidacta.
          </Typography>
        </div>
      </div>
    );
    const div2 = React.createElement(
      "div",
      { className: "container-contacto" },
      <Fragment>
        {contacto.map((contact, i) => (
          <>
          <div key={i} className="cont-sub-contacto">
            <div className="cont-left">
              <Typography className="typo-contacto" variant="h6">
                {contact.typo}
              </Typography>
            </div>
            <div className="cont-right">
              <IconButton href={contact.link} target={contact.target}  className="icon-btn-contacto">
                {contact.icon}
              </IconButton>
            </div>
            </div>
          </>
        ))}
      </Fragment>
    );
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
      div2,
      div3,
      elements,
    ]);

    ReactDom.hydrate(container, contenedor);
  }, []);

  return <div className="scene" id="scene"></div>;
};

export default About;
