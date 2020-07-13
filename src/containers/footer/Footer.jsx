import React from "react";
import "./Footer.css";
import { Typography, IconButton } from "@material-ui/core";
import { Mail, GitHub, Instagram } from "@material-ui/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Typography className="typo-footer" variant="h5"><span>A</span>braham <span>V</span>idal</Typography>
      <div className="container-icons-footer">
        <div className="cont-icon-sub">
          <IconButton className="btn-footer"  href="mailto:antonio.vidal95@hotmail.com" target="_blank">
            <Mail  className="icon-footer"/>
          </IconButton>
        </div>
        <div className="cont-icon-sub">
          <IconButton className="btn-footer"  href="mailto:abrvc95@gmail.com" target="_blank">
            <Mail className="icon-footer"/>
          </IconButton>
        </div>
        <div className="cont-icon-sub">
          <IconButton className="btn-footer"   href="https://github.com/antonio9520" target="_blank">
            <GitHub className="icon-footer" />
          </IconButton>
        </div>
        <div className="cont-icon-sub">
          <IconButton className="btn-footer"  href="https://www.instagram.com/abraham.antonio95/?hl=es-la" target="_blank">
            <Instagram className="icon-footer"/>
          </IconButton>
        </div>
      </div>
      <Typography style={{ color: "#C3C0B0" }} variant="body1">
        &copy; Abraham Vidal || Todos los derechos reservados 2020
      </Typography>
    </footer>
  );
};

export default Footer;
