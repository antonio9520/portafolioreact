import React from "react";
import "./style.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";
const CardExperience = (props) => {
  const { img, titulo, descripcion } = props;
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" alt="Contemplative Reptile"
          height="140"
          image={img}
          title={titulo}></CardMedia>
        <CardContent>
          <h2 className="title-card-md">
            {titulo}
          </h2>
          <p className="año-card-md">
              2018-2020
          </p>
          <p className="desc-card-md">
              {descripcion}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardExperience;
