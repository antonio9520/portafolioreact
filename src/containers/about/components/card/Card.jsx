import React from "react";
import "./Card.css"
import { Typography } from "@material-ui/core"
const Card = (props) => {
  const {card} = props;
  return (
    <div className={card}>
      <div className="cont-typo-about-sub">
        <div className="overlay-about"></div>
        <div className="cont-title-about">
          <h2  className="titulo">
            Sobre mi.
          </h2>
          <p className="contenido">
            Soy estudiante de Ingeniería en Informática y
            programador ReactJs. Como desarrollador Web Junior, me encantaría
            poder formar parte de una empresa en donde pueda aplicar todos mis
            conocimientos, y al mismo tiempo, que permita desarrollarme
            profesionalmente. Soy una persona responsable, autocrítico, con
            capacidad de adaptación, disposición a aprender y apasionado por la
            programación y desarrollo de soluciones web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
