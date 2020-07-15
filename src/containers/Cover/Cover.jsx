import React, {Fragment} from "react";
import { Grid, Hidden } from "@material-ui/core";
import Layout from "../../components/Layout/Layout/Layout";
import "./style.css";
import Target from "./components/target/Target";
import mountains from "../../resources/img/mountainsnigth.jpg"
import mountainsSm from "../../resources/img/mountainsSm.jpg"
import mountainsXs from "../../resources/img/mountainsXs.jpg"
import mountainsDown from "../../resources/img/mountainsdown.png";
import cloud1 from "../../resources/img/cloud1.png"
import cloud2 from "../../resources/img/cloud2.png"
import cloud3 from "../../resources/img/cloud3.png"
import { DoubleArrow } from "@material-ui/icons";
import { Link } from "react-scroll";

const Cover = () => {
  
  return (
    <Fragment>
      <Grid container className="body" id="Inicio">
        {/* <Hidden smDown>
      {/* <img className="img" alt="body" src={mountains}></img> 
      <img className="img-down" alt="body" src={mountainsDown}></img>  
      </Hidden> */}
      {/* <Hidden only={["xs", "md", "lg"]}>
      <img className="img" alt="body" src={mountainsSm}></img> 
      </Hidden>
      <Hidden smUp>
      <img className="img" alt="body" src={mountainsXs}></img> 
      </Hidden> */}
     
      {/* <img className="cloud1" alt="nube1" src={cloud1}></img>
      <img className="cloud2" alt="nube1" src={cloud2}></img>
     <img className="cloud3" alt="nube1" src={cloud3}></img>
       <img className="cloud4" alt="nube1" src={cloud1}></img>
      <img className="cloud5" alt="nube1" src={cloud2}></img>
      <img className="cloud6" alt="nube1" src={cloud3}></img>  */}
        <Grid container className="container-Info">
          <Grid item xs={12} sm={12} md={12}>
            <div className="vidContent">
              <Target />
            </div>
            <div className="div-discover">

               <Link
                activeClass="active"
                className="link"
                to="scene"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <p>Descubrir</p>
                <DoubleArrow fontSize="large" className="icon" />
              </Link> 
            </div>
          </Grid>
         
        </Grid>
      </Grid>
      {/* <Layout /> */}
    </Fragment>
  );
};

export default Cover;
