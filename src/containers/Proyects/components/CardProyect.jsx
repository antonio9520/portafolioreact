import React from "react";
import "./style.css";
import clsx from "clsx";
import {
  Typography,
  IconButton,
  makeStyles,
  Collapse,
} from "@material-ui/core";
import { ExpandMore, GitHub, QueuePlayNext } from "@material-ui/icons";
import LenguajeIcon from "./LenguajeIcon";
import image from "../../../resources/img/portafolioimg.jpg";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const CardProyect = ({ proyecto }) => {
  const {
    titulo,
    lenguajes,
    descripcion,
    proyectURL,
    gitURL,
    servidorURL,
  } = proyecto;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container-targetProyect">
      <div className="cont-contenido-proyect">
        <div className="cont-img-card">
          <img className="img-targetProyect" src={image} alt="imagen"></img>
        </div>
        <div className="cont-typo-proyect">
          <Typography className="name-proyect" variant="h5">
            {titulo}
          </Typography>
          <div className="container-icons">
            {lenguajes.map((lenguaje, i) => (
              <LenguajeIcon key={i} lenguaje={lenguaje} />
            ))}
          </div>
          <div className="cont-arrow-collapse">
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </div>
          <div className="cont-descripcion-proyect">
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography variant="body2">{descripcion}</Typography>
              <div>
                {gitURL ? (
                  <IconButton href={gitURL} target="_blank">
                    <GitHub titleAccess="Cliente: Ver en GitHub" />
                  </IconButton>
                ) : null}
                {servidorURL ? (
                  <IconButton href={servidorURL} target="_blank">
                    <GitHub titleAccess="Servidor: Ver en GitHub" />
                  </IconButton>
                ) : null}
                {proyectURL ? (
                  <IconButton href={proyectURL} target="_blank">
                    <QueuePlayNext titleAccess="Abrir Aplicación" />
                  </IconButton>
                ) : null}
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProyect;
