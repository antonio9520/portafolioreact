import React, { useState } from "react";
import { Typography, IconButton } from "@material-ui/core";
import img from "../../../resources/img/duoc.jpg";
import duoc2 from "../../../resources/img/duoc2.jpg";
import duoc3 from "../../../resources/img/duoc3.jpg";
import img2 from "../../../resources/img/laptop2.jpg";

const CardArrow = (props) => {
  const { title, sub1, year, sub2, body, icon, changeImage, id, image } = props;
 
  const [flip, setFlip] = useState(false);
  
let interval = null;
  const handleButton = () => {
    setFlip(!flip);
    console.log(flip)
    changeImage(img);
  
  console.log("handleButton")
}

  let contador = 0;

 
  const handleLeave = () => {
    setFlip(!flip);
    console.log(flip)
    changeImage(null);
  };
 

  return (
    <div
      className="container-card-arrow "
     
      onFocus={() => handleButton()}
      onBlur={handleLeave}
    >
      <div className="section-top">
        {icon ? (
          <div className="cont-icon">
            <div className={flip ? "card-front-active" : "card-front"}>
              <span>
                <IconButton
                  className="animation-button"
                  style={{ color: "white", border: "1px solid white" }}
                >
                  {icon}
                </IconButton>
              </span>
            </div>
          </div>
        ) : null}

        <div className={flip ? "card-back-active" : "card-back"}>
          <Typography className="card-arrow-title" variant="h5">
            {title}
          </Typography>
          <Typography className="card-arrow-sub1" variant="subtitle1">
            {sub1}
          </Typography>
        </div>
      </div>
      <div className="section-arrow">{props.children}</div>
      <div className="section-bottom">
        <div className="card-front"></div>
        <div className={flip ? "card-back-active" : "card-back"}>
          <Typography className="card-arrow-year" variant="h5">
            {year}
          </Typography>
          <Typography className="card-arrow-sub2" variant="subtitle2">
            {sub2}
          </Typography>
          <Typography className="card-arrow-body" variant="body2">
            {body}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CardArrow;
