import React from 'react'
import "./BtnLink.css"
import { DoubleArrow } from "@material-ui/icons";
import { Link } from "react-scroll";

const btnLink = (props) => {
    const { p, link } = props;
    return (
        <div className="div-discover">
        <Link
          activeClass="active"
          className="link"
          to={link}
          spy={true}
          offset={50}
          duration={500}
        >
          <p>{p}</p>
          <DoubleArrow fontSize="large" className="icon" />
        </Link>
      </div>
    )
}

export default btnLink
