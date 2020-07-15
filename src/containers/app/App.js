import React, { Fragment, Component } from "react";
import "./App.css";
import { Hidden } from "@material-ui/core";
import { Contenido } from "../";
import { NavSticky, MenuMdDown } from "../../components";
import { Cover, JobExperience, Knowledge, Proyects, About, Footer } from "../";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      me: "hidden",
      top: "hidden",
      house: "hidden",
    };
  }
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }
  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('hidden')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
    window.onscroll = () => this.handleAnimation();
    console.log(document.documentElement.scrollTop)
    console.log("ensamble")
  }

  handleAnimation = () => {
    if(document.documentElement.scrollTop > 500){
      this.setState({
       house: "house"
      });
    }
    if(document.documentElement.scrollTop < 490){
      this.setState({
        house: "hidden"
      });
    }
  };

  render() {
    return (
      
        <div>
        <Cover />
        <About me={this.state.me} house={this.state.house}/>
        <JobExperience />
        <Knowledge />
        <Proyects />
        <Footer />
        </div>
     
    );
  }
}

export default App;
