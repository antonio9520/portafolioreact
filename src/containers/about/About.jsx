import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "./About.css";

const About = () => {
  return (
    <Grid container justify="center" style={{display: "flex", alignItems:"center"}} className="container-about" id="about">
      <Grid item xs={12} sm={8} md={6}>
        <Typography className="sobre-mi" variant="h4">Sobre mi</Typography>
        <Grid container>
          <Grid item>
            <Typography className="typo-contenido" variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis
          orci, placerat vitae mi eget, posuere mattis mi. Vestibulum tristique
          pulvinar hendrerit.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
