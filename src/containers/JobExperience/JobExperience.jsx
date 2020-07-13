import React, { useState, Fragment } from "react";
import "./JobExperience.css";
import { Typography, IconButton, Hidden } from "@material-ui/core";
import { LineEnd, LineStart, Line, CardArrow, LineItem } from "./components";
import { Grid } from "@material-ui/core";
import { School, Visibility, VisibilityOff } from "@material-ui/icons";
import { CSSTransition } from "react-transition-group";
import img2 from "../../resources/img/duoc.jpg";
import duoc2 from "../../resources/img/duoc2.jpg";
import duoc3 from "../../resources/img/duoc3.jpg";
import CardExperience from "./mdUp/CardExperience";

const JobExperience = () => {
  const [image, setImage] = useState();
  // const [time, setTime] = useState(false);
  const [collapse, setCollapse] = useState(false);
  // const timeToClear = useRef(false);

  const changeImage = () => {
    // setImage(img);
    rotarImagen();
    // timeToClear.current = window.setInterval(() => rotarImagen(), 10000);
  };

  var contador = 0;
  let rotarImagen = () => {
   
      let misImagenes = [duoc2, img2,  duoc3];
      setImage(misImagenes[contador]);
      contador++;
      if (contador === 3) contador = 0;
   
  };

  const handleClick = () => {
    setCollapse(!collapse);
    // setTime(!time);
    // window.clearInterval(timeToClear.current);
     setImage(null);
  };

  return (
    <Fragment>
      <div className="container-job" id="experience">
        {image ? (
          <img className="img-job" alt="jobExp" src={image}></img>
        ) : null}

        <div className="overlay-job"></div>
        <div className="cont-body-job">
          <Typography
            variant="h4"
            className={collapse ? "job-title-active" : "job-title"}
          >
            Experiencia
          </Typography>
          <div className={collapse ? "cont-show-btn-active" : "cont-show-btn"}>
            <IconButton onClick={handleClick}>
              {collapse ? (
                <VisibilityOff className="btn-show-job-off" />
              ) : (
                <Visibility className="btn-show-job" />
              )}
            </IconButton>
          </div>
          <Hidden smDown>
            <CSSTransition
              in={collapse}
              unmountOnExit
              timeout={2000}
              classNames="lineJob"
            >
              <div>
                <Grid container>
                  <Grid item xs={2} sm={2} md={2}>
                    <CardArrow>
                      <LineStart />
                    </CardArrow>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2}>
                    <CardArrow
                     
                      changeImage={changeImage}
                      icon={<School />}
                      image={image}
                      title="I.P. Duoc UC."
                      sub1="2 Años"
                      year="2018"
                      sub2="Estudiante Ingeniería en Informática"
                      body=""
                    >
                      <LineItem />
                    </CardArrow>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2}>
                    <CardArrow>
                      <Line />
                    </CardArrow>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2}>
                    <CardArrow>
                      <Line />
                    </CardArrow>
                  </Grid>

                  <Grid item xs={2} sm={2} md={2}>
                    <CardArrow>
                      <Line />
                    </CardArrow>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    className="container-line-end"
                  >
                    <CardArrow>
                      <LineEnd />
                    </CardArrow>
                  </Grid>
                </Grid>
              </div>
            </CSSTransition>
          </Hidden>
          <Hidden mdUp>
            <CSSTransition
              in={collapse}
              unmountOnExit
              timeout={2000}
              classNames="lineJob"
            >
              <div style={{ margin: "0 30px" }}>
                <Grid container justify="center">
                  <Grid item xs={12} sm={6} md={4}>
                    <CardExperience
                      img={duoc2}
                      titulo="Duoc UC."
                      descripcion="Estudiante de la carrera Ingeniería en informática"
                    />
                  </Grid>
                </Grid>
              </div>
            </CSSTransition>
          </Hidden>
        </div>
      </div>
    </Fragment>
  );
};

export default JobExperience;
