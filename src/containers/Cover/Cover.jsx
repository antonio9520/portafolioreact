import React, { Fragment, useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import "./style.css";
import Target from "./components/target/Target";
import { DoubleArrow } from "@material-ui/icons";
import { Link } from "react-scroll";

const Cover = () => {
  return ( 
    <Fragment>
      <Grid container className="body" id="Inicio">
        <Grid container className="container-Info">
          <Grid item xs={12} sm={12} md={12}>
            <div className="vidContent">
              <Target />
            </div>
            <div className="div-discover">
              <Link
                activeClass="active"
                className="link"
                to="scene"
                spy={true}
                offset={50}
                duration={500}
              >
                <p>Descubrir</p>
                <DoubleArrow fontSize="large" className="icon" />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Cover;
