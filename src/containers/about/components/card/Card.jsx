import React, { useState } from "react";
import "./Card.css";
import { Typography } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
const Card = (props) => {
  const { card } = props;
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className={card}>
     
        <div className={open ? "cont-typo-about-active" : "cont-typo-inactive"} onClick={handleOpen}>
          <div className="overlay-about"></div>
          <div className="cont-title-about">
            <h2 className="titulo-active">Sobre mi.</h2>
            <p className="contenido-active">
              Soy estudiante de Ingeniería en Informática y programador ReactJs.
              Como desarrollador Web Junior, me encantaría poder formar parte de
              una empresa en donde pueda aplicar todos mis conocimientos, y al
              mismo tiempo, que permita desarrollarme profesionalmente. Soy una
              persona responsable, autocrítico, con capacidad de adaptación,
              disposición a aprender y apasionado por la programación y
              desarrollo de soluciones web.
            </p>
           
          </div>
          <p className="msg-cerrar">click para cerrar</p>
        </div>
     
     
        <div className={open ? "cont-typo-inactive-btn" : "cont-typo-about" } onClick={handleOpen}>
          <div className="overlay-about"></div>
          <div className="cont-title-about">
            <h2 className="titulo">Sobre mi.</h2>
          </div>
        </div>
       
     
    </div>
  );
};

export default Card;
