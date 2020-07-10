import React from "react";
import "./style.css";
import { Typography, Hidden } from "@material-ui/core";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
    <Hidden smDown>
      <div className="container-nav">
        <nav className="nav-primary">
          <ul>
            <Link
              activeClass="active"
              className="link"
              to="scene"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Typography variant="h6" gutterBottom>
                Sobre mi
              </Typography>
            </Link>

            <Link
              activeClass="active"
              className="link"
              to="experience"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Typography variant="h6" gutterBottom>
                Experiencia
              </Typography>
            </Link>

            <Link
              activeClass="active"
              className="link"
              to="knowledge"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Typography variant="h6" gutterBottom>
                Conocimientos
              </Typography>
            </Link>

            <Link
              activeClass="active"
              className="link"
              to="proyects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Typography variant="h6" gutterBottom>
                Demos
              </Typography>
            </Link>
          </ul>
        </nav>
      </div>
      </Hidden>
    </>
  );
};

export default Header;
