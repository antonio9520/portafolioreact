import React, { useState } from "react";
import "./Knowledge.css";
import { Grid, IconButton } from "@material-ui/core";
import Categories from "./components/categories";
import KnowItem from "./components/KnowItem";
import {
  Code,
  Storage,
  DeveloperBoard,
  DeviceHub,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { CSSTransition } from "react-transition-group";

const Knowledge = () => {
  const [collapse, setCollapse] = useState(true);

  const languages = [
    {
      avatar: "I",
      typo: "Javascript",
      className: "avatar-int",
    },
    {
      avatar: "I",
      typo: "Html",
      className: "avatar-int",
    },
    {
      avatar: "I",
      typo: "Css",
      className: "avatar-int",
    },
    {
      avatar: "N",
      typo: "Sql",
      className: "avatar-novice",
    },
  
  ];
  const databases = [
    {
      avatar: "N",
      typo: "MongoDB",
      className: "avatar-novice",
    },
    {
      avatar: "N",
      typo: "Sql server",
      className: "avatar-novice",
    },
    {
      avatar: "N",
      typo: "Firebase",
      className: "avatar-novice",
    },
  ];
  const frameworks = [
    {
      avatar: "I",
      typo: "ReactJs",
      className: "avatar-int",
    },
    {
      avatar: "N",
      typo: "NodeJs",
      className: "avatar-novice",
    },
    {
      avatar: "N",
      typo: "Express",
      className: "avatar-novice",
    },
  ];

  const others = [
    {
      avatar: "I",
      typo: "GitHub",
      className: "avatar-int",
    },
    {
      avatar: "I",
      typo: "Redux",
      className: "avatar-int",
    },
    {
      avatar: "I",
      typo: "Material-ui",
      className: "avatar-int",
    },
    {
      avatar: "N",
      typo: "Photoshop",
      className: "avatar-novice",
    },
  ];
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <div className="container-Know" id="knowledge">
     
      <div className="overlay-know"></div>
      {/* <CSSTransition classNames="transition-know"
            in={collapse}
            unmountOnExit
            timeout={2000}>
              <Hidden smDown>
         <img className="img-know" src={img} alt="img-know"></img>
         </Hidden>
      </CSSTransition> */}

      <div className="cont-body-know">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <h2 className={collapse ? "title-know-active" : "title-know"} >
              Conocimientos
            </h2>
            <div className={ collapse ? "show-btn-know-active" : "show-btn-know"}>
              <IconButton onClick={handleClick}>
                {collapse ? (
                  <VisibilityOff className="btn-show-job-off" />
                ) : (
                  <Visibility className="btn-show-job" />
                )}
              </IconButton>
            </div>
          </Grid>
          <CSSTransition
            classNames="transition-know"
            in={collapse}
            unmountOnExit
            timeout={2000}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <div>
                  <Categories />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
                <KnowItem
                  title="Lenguajes"
                  icon={<Code className="icon-code" />}
                  list={languages}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
                <KnowItem
                  title="Frameworks"
                  list={frameworks}
                  icon={<DeveloperBoard className="icon-code" />}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
                <KnowItem
                  title="Base de Datos"
                  list={databases}
                  icon={<Storage className="icon-code" />}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3} style={{ textAlign: "center" }}>
                <KnowItem
                  title="Otros"
                  list={others}
                  icon={<DeviceHub className="icon-code" />}
                />
              </Grid>
            </Grid>
          </CSSTransition>
        </Grid>
      </div>
    </div>
  );
};

export default Knowledge;
