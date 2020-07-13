import React, { useState, useEffect } from "react";
import "./style.css";
import { Typography, Hidden, IconButton } from "@material-ui/core";
import { Menu, DoubleArrow } from "@material-ui/icons";
import { Link } from "react-scroll";

const NavSticky = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleButton = () => {
    setOpen(!open);
  };
  const handleClick = () => {
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    if (scrollTop > 700) {
      setShow(true);
    } else {
      setShow(false);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const contenido = (
    <Hidden smDown>
      <div className="container-nav-sticky">
        <nav className="nav-primary">
          <ul className={open ? "ul-nav" : "ul-nav-active"}>
            <Link
              activeClass="active"
              className="link"
              to="Inicio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleClick}
            >
              <Typography variant="h6" gutterBottom>
                Inicio
              </Typography>
            </Link>
            <Link
              activeClass="active"
              className="link"
              to="scene"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleClick}
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
              offset={0}
              duration={500}
              onClick={handleClick}
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
              offset={0}
              duration={500}
              onClick={handleClick}
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
              offset={0}
              duration={500}
              onClick={handleClick}
            >
              <Typography variant="h6" gutterBottom>
                Demos
              </Typography>
            </Link>
          </ul>
          <IconButton
            className="icon-btn-nav"
            style={{ backgroundColor: "white", marginRight: "15px" }}
            onClick={handleButton}
          >
            {open === false ? (
              <Menu style={{ color: "#555555" }} />
            ) : (
              <DoubleArrow style={{ color: "#555555" }} />
            )}
          </IconButton>
        </nav>
      </div>
    </Hidden>
  );
  return <>{show ? contenido : null}</>;
};

export default NavSticky;
