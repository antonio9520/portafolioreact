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
      <Grid item xs={12} sm={12} md={6} className="itemTarget">
        <div className="card-cover">
          <div className="title-target">
            <Typography className="target-name" variant="h5">
              Abraham Vidal
            </Typography>
            <Typography className="target-subtitle" variant="subtitle2">
              React Developer
            </Typography>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Link
                activeClass="active"
                className="link"
                to="scene"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <DoubleArrow fontSize="large" className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Target;
