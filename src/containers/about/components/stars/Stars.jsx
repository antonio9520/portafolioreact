import React, { useEffect } from "react";
import ReactDom from "react-dom";
import "./Stars.css"

const Stars = () => {
  useEffect(() => {
    const contenedor = document.getElementById("container-stars");
    let elements = [];

    for (let i = 0; i < 500; i++) {
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let size = Math.random() * 2;
      let duration = Math.random() * 10;

      let element = React.createElement("i", {
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
    let starsElements = React.createElement(
      "div",
      { className: "stars-elements" },
      [elements]
    );
    ReactDom.hydrate(starsElements, contenedor);
  },[]);

  return <div className="container-stars" id="container-stars"></div>;
};

export default Stars;
