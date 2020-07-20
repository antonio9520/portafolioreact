import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import "./style.css";
import { BtnLink } from "../../components";
import Target from "./components/target/Target";

const Cover = () => {
  return (
    <Fragment>
      <Grid container className="body" id="Inicio">
        <Grid container className="container-Info">
          <Grid item xs={12} sm={12} md={12}>
            <div className="vidContent">
              <Target />
            </div>
            <BtnLink p="descubrir" link="scene" classBtn="icon"/>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Cover;
