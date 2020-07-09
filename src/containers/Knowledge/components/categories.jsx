import React from "react";
import { Typography, Avatar, Grid } from "@material-ui/core";
import "./styles.css"

const categories = () => {
  return (
    <div className='cont-categories'>
      <div className="cont-categories-sub">
        
        <Avatar className='avatar-expert'>E</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Experto
        </Typography>
      </div>
      <div className="cont-categories-sub">
      <Avatar className='avatar-advanced'>A</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Avanzado
        </Typography>
      </div>
      <div className="cont-categories-sub"> 
      <Avatar className='avatar-int'>I</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Intermedio
        </Typography>
      </div>
      <div className="cont-categories-sub">
      <Avatar className='avatar-novice'>N</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Novato
        </Typography>
      </div>
      <div className="cont-categories-sub">
      <Avatar className='avatar-fund'>F</Avatar>
        <Typography className="typo-body-know" variant="body1">
          Conocimientos Fundamentales
        </Typography>
      </div>
    </div>
  );
};

export default categories;
