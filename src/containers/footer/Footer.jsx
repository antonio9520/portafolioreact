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
          <IconButton className="btn-footer"  href="" target="_blank">
            <Mail  className="icon-footer"/>
          </IconButton>
        </div>
        <div className="cont-icon-sub">
          <IconButton className="btn-footer"  href="" target="_blank">
            <Mail className="icon-footer"/>
          </IconButton>
        </div>
        <div className="cont-icon-sub">
          <IconButton className="btn-footer"  href="" target="_blank">
            <GitHub className="icon-footer" />
          </IconButton>
        </div>
        <div className="cont-icon-sub">
          <IconButton className="btn-footer"  href="" target="_blank">
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
