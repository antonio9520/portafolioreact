import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { DoubleArrow } from "@material-ui/icons";
import "./Target.css";
import { Link } from "react-scroll";

const style = {
  containerTarget: {
    borderRadius: "10px",
    position: "relative",
   
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
          <h2 className="target-hellow" >
              Hola, yo soy
            </h2>
            <h2 className="target-name" >
              <span>A</span>braham <span>V</span>idal
            </h2>
            <p class="line anim-typewriter">Desarrollador ReactJs......!!</p>
            <div style={{ width: "100%", textAlign: "center" }}>
              {/* <Link
                activeClass="active"
                className="link"
                to="scene"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <DoubleArrow fontSize="large" className="icon" />
              </Link> */}
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Target;
