import React, { useState } from "react";
import { IconButton } from "@material-ui/core";


const CardArrow = (props) => {
  const { title, sub1, year, sub2, body, icon, changeImage} = props;

  const [flip, setFlip] = useState(false);

  const handleButton = () => {
    setFlip(!flip);

    changeImage(); 

  };

  const handleLeave = () => {
    setFlip(!flip);

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
          <h2 className="card-arrow-title" >
            {title}
          </h2>
          <h2 className="card-arrow-sub1" >
            {sub1}
          </h2>
        </div>
      </div>
      <div className="section-arrow">{props.children}</div>
      <div className="section-bottom">
        <div className="card-front"></div>
        <div className={flip ? "card-back-active" : "card-back"}>
          <p className="card-arrow-year" variant="h5">
            {year}
          </p>
          <p className="card-arrow-sub2" variant="subtitle2">
            {sub2}
          </p>
          <p className="card-arrow-body" variant="body2">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardArrow;
