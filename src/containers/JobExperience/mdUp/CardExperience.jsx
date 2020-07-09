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
          <Typography gutterBottom variant="h5" component="h2">
            {titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary">
              {descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardExperience;
