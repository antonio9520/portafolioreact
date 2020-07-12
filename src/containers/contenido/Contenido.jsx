import React, { Fragment } from "react";
import { Cover, JobExperience, Knowledge, Proyects, About, Footer } from "../";

const Contenido = () => {
  return (
    <Fragment>
      <Cover />
      <About />
      <JobExperience />
      <Knowledge />
      <Proyects />
      <Footer />
    </Fragment>
  );
};

export default Contenido;
