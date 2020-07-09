import React, { useEffect, useWindowSize, useRef } from "react";
import ReactDom from "react-dom";
import { Grid, Typography } from "@material-ui/core";
import forest from "../../resources/img/study2.png";
import cloud1 from "../../resources/img/cloud1.png";
import cloud2 from "../../resources/img/cloud2.png";
import cloud3 from "../../resources/img/cloud3.png";
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
      {className: "cont-typo"},
      <div>
        <Typography variant="h4" className="titulo">Sobre mi</Typography>
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
    for (let i = 0; i < 300; i++) {
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let size = Math.random() * 2;
      let duration = Math.random() * 10;

      // star.style.animationDuration = 5 + duration + "s";
      // star.style.animationDelay = duration + "s";
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

  return (
    // <div id="container-about-render">
    // <Grid  container justify="center" style={{display: "flex", alignItems:"center"}} className="container-about" id="about">
    //   <Grid item xs={12} sm={8} md={6}>
    //     <Typography className="sobre-mi" variant="h4">Sobre mi</Typography>
    //     <Grid container>
    //       <Grid item >
    //         <Typography className="typo-contenido" variant="body2">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis
    //       orci, placerat vitae mi eget, posuere mattis mi. Vestibulum tristique
    //       pulvinar hendrerit.
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
    // </div>
    <div className="scene" id="scene">
      {/* <img src="bg.png" alt="bg" className="bg" /> 
      <img src={cloud1} alt="cloud1" className="cloud1" />
      <img src={cloud2} alt="cloud2" className="cloud2" />
      <img src={cloud3} alt="cloud3" className="cloud3" />
      <img src={cloud1} alt="cloud4" className="cloud4" />
      <img src={cloud2} alt="cloud5" className="cloud5" />
      <img src={cloud3} alt="cloud6" className="cloud6" /> */}
    </div>
  );
};

export default About;
