import React from "react";
import { Avatar } from "@material-ui/core";
import "./styles.css"

const categories = (props) => {
  const {collapse} = props;
  return (
    <div className='cont-categories'>
      <div className={collapse ? "cont-categories-sub" : "categories-inact"}>
        
        <Avatar className='avatar-expert'>E</Avatar>
        <p className="typo-body-know" >
          Experto
        </p>
      </div>
      <div className={collapse ? "cont-categories-sub sub1" : "categories-inact"}>
      <Avatar className='avatar-advanced'>A</Avatar>
        <p className="typo-body-know" >
          Avanzado
        </p>
      </div>
      <div className={collapse ? "cont-categories-sub sub2" : "categories-inact"}> 
      <Avatar className='avatar-int'>I</Avatar>
        <p className="typo-body-know" >
          Intermedio
        </p>
      </div>
      <div className={collapse ? "cont-categories-sub sub3" : "categories-inact"}>
      <Avatar className='avatar-novice'>N</Avatar>
        <p className="typo-body-know" >
          Novato
        </p>
      </div>
      <div className={collapse ? "cont-categories-sub sub4" : "categories-inact"}>
      <Avatar className='avatar-fund'>F</Avatar>
        <p className="typo-body-know" >
          Conocimientos Fundamentales
        </p>
      </div>
    </div>
  );
};

export default categories;
