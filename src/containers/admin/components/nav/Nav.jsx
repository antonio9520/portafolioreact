import React from "react";
import "./Nav.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useRouteMatch, useHistory } from "react-router-dom";
import { cerrarSesionAction } from "../../../../actions/authAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {

  let { url } = useRouteMatch();
  console.log(url)
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const goListado = () => {
    history.push(`${url}`);
  };
  const goNewProyect = () => {
    history.push(`${url}/new-proyect`);
  };
  const cerrarSesion = () => {
    dispatch(cerrarSesionAction())
    history.push("/")
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography onClick={goListado} variant="h6" className={classes.title}>
          Listado Proyectos
        </Typography>

        <Button onClick={goNewProyect} color="inherit">
          Nuevo Proyecto
        </Button>

        <Button onClick={cerrarSesion} color="inherit">Cerrar Sesión</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
