import React from "react";
import "./styles.css";
import { Avatar } from "@material-ui/core";

const KnowItem = (props) => {
  const { title, icon, list, collapse, classKnow} = props;
  return (
    <div className={collapse ? `container-knowItem item${classKnow}` : "know-item-inact"}>
      <div className="cont-icon-know">{icon}</div>
      <div className="cont-typo-know">
        <h2  className="title-know-item">
          {title}
        </h2>
        <div className="cont-items-know">
          {list.map((list, index) => (
            <div key={index} className="cont-avatar-know">
              <Avatar className={list.className}>{list.avatar}</Avatar>
              <p>{list.typo}</p>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default KnowItem;
