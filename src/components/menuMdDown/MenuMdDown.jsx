import React, { useState } from "react";
import "./MenuMdDown.css";
import {
  Drawer,
  IconButton,
  List,
  Divider,
  Typography,
} from "@material-ui/core";
import {  Menu, DoubleArrow } from "@material-ui/icons";
import { Link } from "react-scroll";

const MenuMdDown = () => {
  const [open, setOpen] = useState(false);

  const handleButton = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setOpen(false);
  };
  return (
    <div className="container-menu-sm">
    
        <IconButton onClick={handleButton} className={open ? "btn-menu-sm-active" : "btn-menu-sm"}>
          {open? <DoubleArrow/> : <Menu />}
        </IconButton>
   
      <Drawer anchor="right" open={open}>
        <div className="list-drawer" role="presentation">
          <ul>
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

          <Divider />
          <List></List>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuMdDown;

