import React, { useEffect } from "react";
import ReactDom from "react-dom";
import {  Typography } from "@material-ui/core";
import forest from "../../resources/img/study10.png";
import "./About.css";

const About = () => {
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
        <Typography variant="h4" className="titulo">
          Sobre mi
        </Typography>
        <Typography variant="body2" className="contenido">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis
          orci, placerat vitae mi eget, posuere mattis mi. Vestibulum tristique
          pulvinar hendrerit.
        </Typography>
      </div>
    );
    const div2 = React.createElement(
      "div",
      {},
      <div className="moon-nigth"></div>
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
