import React, { useEffect } from "react";
import "./style.css";
import { Grid, Typography } from "@material-ui/core";
import CardProyect from "./components/CardProyect";
import proyectos from "./data"

const Proyects = () => {
  

  return (
    <div className="container-proyects" id="proyects">
      <h2 variant="h4" className="title-proyect">Demos</h2>
      <Grid container>
       {proyectos.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto._id}>
            <CardProyect proyecto={proyecto} />
          </Grid>
        ))} 
      </Grid>
    </div>
  );
};

export default Proyects;
