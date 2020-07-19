import React from "react";
import { Typography, Avatar } from "@material-ui/core";
import "./styles.css"

const categories = () => {
  return (
    <div className='cont-categories'>
      <div className="cont-categories-sub">
        
        <Avatar className='avatar-expert'>E</Avatar>
        <p className="typo-body-know" >
          Experto
        </p>
      </div>
      <div className="cont-categories-sub">
      <Avatar className='avatar-advanced'>A</Avatar>
        <p className="typo-body-know" >
          Avanzado
        </p>
      </div>
      <div className="cont-categories-sub"> 
      <Avatar className='avatar-int'>I</Avatar>
        <p className="typo-body-know" >
          Intermedio
        </p>
      </div>
      <div className="cont-categories-sub">
      <Avatar className='avatar-novice'>N</Avatar>
        <p className="typo-body-know" >
          Novato
        </p>
      </div>
      <div className="cont-categories-sub">
      <Avatar className='avatar-fund'>F</Avatar>
        <p className="typo-body-know" >
          Conocimientos Fundamentales
        </p>
      </div>
    </div>
  );
};

export default categories;
