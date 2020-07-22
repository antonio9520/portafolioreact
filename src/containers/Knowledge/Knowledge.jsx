import React, { useState, useEffect } from "react";
import "./Knowledge.css";
import img from "../../resources/img/books.jpg";
import { Grid, IconButton, Hidden } from "@material-ui/core";
import { BtnLink } from "../../components";
import { languages, frameworks, databases, others } from "./data";
import Categories from "./components/categories";
import KnowItem from "./components/KnowItem";
import arrow from "../../resources/img/arrow.png"
import { Link } from "react-scroll";
import {
  Code,
  Storage,
  DeveloperBoard,
  DeviceHub,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { CSSTransition } from "react-transition-group";

const Knowledge = (props) => {
  const { knowledge } = props;
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (knowledge) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [knowledge]);
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="container-Know" id="knowledge">
      <div className="overlay-know"></div>
      <img className="img-know" src={img} alt="img-know"></img>
      <div className="cont-body-know">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <h2 className="title-know-active">Conocimientos</h2>
            <div
              className={collapse ? "show-btn-know-active" : "show-btn-know"}
            >
              <IconButton onClick={handleClick}>
                {collapse ? (
                  <VisibilityOff className="btn-show-job-off" />
                ) : (
                  <Visibility className="btn-show-job" />
                )}
              </IconButton>
            </div>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <div>
                <Categories collapse={collapse} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
              <KnowItem
                title="Lenguajes"
                icon={<Code className="icon-code" />}
                list={languages}
                collapse={collapse}
                classKnow="uno"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
              <KnowItem
                title="Frameworks"
                list={frameworks}
                icon={<DeveloperBoard className="icon-code" />}
                collapse={collapse}
                classKnow="dos"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
              <KnowItem
                title="Base de Datos"
                list={databases}
                icon={<Storage className="icon-code" />}
                collapse={collapse}
                classKnow="tres"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
              <KnowItem
                title="Otros"
                list={others}
                icon={<DeviceHub className="icon-code" />}
                collapse={collapse}
                classKnow="cuatro"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="arrow-about">
      <Link
          activeClass="active"
          className="link"
          to="proyects"
          spy={true}
          offset={50}
          duration={500}
        >
           <img src={arrow} alt="arrow"></img>
        </Link>
      
      </div>
    </div>
  );
};

export default Knowledge;
