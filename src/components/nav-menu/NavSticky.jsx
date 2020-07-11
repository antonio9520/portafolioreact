import React, { useState, useEffect } from "react";
import "./style.css";
import { Typography, Hidden } from "@material-ui/core";
import { Link } from "react-scroll";

const NavSticky = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);
     if(scrollTop > 700){
         setShow(true)
     }else{
         setShow(false)
     }
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const contenido = (
    <Hidden smDown>
      {" "}
      <div className="container-nav-sticky">
        <nav className="nav-primary">
          <ul>
            <Link
              activeClass="active"
              className="link"
              to="scene"
              spy={true}
              smooth={true}
              offset={0}
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
              offset={0}
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
              offset={0}
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
              offset={0}
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
  );
  return (
    <>
      {  show 
        ? contenido
        : null}
    </>
  );
};

export default NavSticky;
