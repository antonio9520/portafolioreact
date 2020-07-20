import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import "./Target.css";

const style = {
  containerTarget: {
    borderRadius: "10px",
    position: "relative",
    backgroundColor: "green",
    top: 0,
  },
};
const useStyle = makeStyles(style);
const Target = () => {
  const classes = useStyle();
  return (
    <Grid container justify="center" className={classes.containerTarget}>
      <Grid item xs={12} sm={12} md={10} className="itemTarget">
        <div className="card-cover">
          <div className="title-target">
            <h2 className="target-hellow">Hola, soy</h2>
            <h2 className="target-name">
              <span>A</span>braham <span>V</span>idal
            </h2>
            <p className="line anim-typewriter">Desarrollador FrontEnd.....!!</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Target;
