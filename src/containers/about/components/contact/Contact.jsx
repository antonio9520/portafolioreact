import React, { useState, Fragment } from "react";
import "./Contact.css";
import { IconButton } from "@material-ui/core";
import { Mail, GitHub, Instagram } from "@material-ui/icons";

const Contact = (props) => {
  const { contact } = props;
  const [open, setOpen] = useState(false);
  const contacto = [
    {
      icon: <Mail />,
      target: "",
      link: "mailto:antonio.vidal95@hotmail.com",
      title: "Enviar correo a antonio.vidal95@hotmail.com",
    },
    {
      icon: <Mail />,
      target: "",
      link: "mailto:abrvc95@gmail.com",
      title: "Enviar correo a abrvc95@gmail.com",
    },
    {
      icon: <GitHub />,
      target: "_blank",
      link: "https://github.com/antonio9520",
      title: "Ir a Perfil",
    },
    {
      icon: <Instagram />,
      target: "_blank",
      link: "https://www.instagram.com/abraham.antonio95/?hl=es-la",
      title: "Ir a perfil",
    },
  ];
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <div className={contact}>
        <div
          className={open ? "btn-contact-inact" : "btn-contact-active"}
          onClick={handleOpen}
        >
          <div className="cont-title-about">
            <h2 className="titulo">Contacto</h2>
          </div>
        </div>
        <div onClick={handleOpen}>
          {contacto.map((contact, i) => (
            <div key={i} className="cont-sub-contacto">
              <div className="cont-right">
                <IconButton
                  href={contact.link}
                  title={contact.title}
                  target={contact.target}
                  className="icon-btn-contacto"
                >
                  {contact.icon}
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
