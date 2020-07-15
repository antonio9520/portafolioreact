import React, { useEffect, Fragment } from "react";
import ReactDom from "react-dom";
import { Typography, IconButton } from "@material-ui/core";
import { Mail, GitHub, Instagram } from "@material-ui/icons";
import forest from "../../resources/img/study10.png";
import house from "../../resources/img/house3.png";
import universe from "../../resources/img/planets2.png";
import "./About.css";

const About = (props) => {
  const { me } = props;

  const contacto = [
    {
      typo: "",
      icon: <Mail />,
      target: "",
      link: "mailto:antonio.vidal95@hotmail.com",
      title: "Enviar correo a antonio.vidal95@hotmail.com",
    },
    {
      typo: "",
      icon: <Mail />,
      target: "",
      link: "mailto:abrvc95@gmail.com",
      title: "Enviar correo a abrvc95@gmail.com",
    },
    {
      typo: "",
      icon: <GitHub />,
      target: "_blank",
      link: "https://github.com/antonio9520",
      title: "Ir a Perfil",
    },
    {
      typo: "",
      icon: <Instagram />,
      target: "_blank",
      link: "https://www.instagram.com/abraham.antonio95/?hl=es-la",
      title: "Ir a perfil",
    },
  ];

  useEffect(() => {
    const contenedor = document.getElementById("scene");
    const back = React.createElement(
      "div",
      { className: "backImg" },
      <img src={universe}></img>
    );
    const div = React.createElement(
      "div",
      {},
      <img src={forest} alt="forest" className={me} />
    );
    const div4 = React.createElement(
      "div",
      {},
      <img src={house} alt="house" className="house" />
    );
    const div3 = React.createElement(
      "div",
      { className: "cont-typo-about" },
      <div className="cont-typo-about-sub">
        <div className="overlay-about"></div>
        <div className="cont-title-about">
          <Typography variant="h4" className="titulo">
            Sobre mi.
          </Typography>
          <Typography variant="body2" className="contenido">
            Soy Abraham Vidal, estudiante de Ingeniería en Informática y
            programador ReactJs. Como desarrollador Web Junior, me encantaría
            poder formar parte de una empresa en donde pueda aplicar todos mis
            conocimientos, y al mismo tiempo, que permita desarrollarme
            profesionalmente. Soy una persona responsable, autocrítico, con
            capacidad de adaptación, disposición a aprender y apasionado por la
            programación y desarrollo de soluciones web.
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
                <IconButton
                  href={contact.link}
                  title={contact.title}
                  target={contact.target}
                  className="icon-btn-contacto"
                >
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
      div2,
      back,
      div4,
      div3,
      elements,
    ]);

    ReactDom.hydrate(container, contenedor);
  }, [me]);

  return <div className="scene" id="scene"></div>;
};

export default About;
