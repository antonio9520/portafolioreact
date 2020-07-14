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
    };
  }

  componentDidMount() {
    window.onscroll = () => this.handleAnimation();
    console.log(document.documentElement.scrollTop)
  }

  handleAnimation = () => {
    if(document.documentElement.scrollTop > 500){
      this.setState({
        me: 'me-visible',
       
      });
    }
    if(document.documentElement.scrollTop < 490){
      this.setState({
        me: 'hidden',
       
      });
    }
  };

  render() {
    return (
      
        <div>
        <Cover />
        <About me={this.state.me} />
        <JobExperience />
        <Knowledge />
        <Proyects />
        <Footer />
        </div>
     
    );
  }
}

export default App;
