import React, { Component } from "react";
import "./App.css";
import { Cover, JobExperience, Knowledge, Proyects, About, Footer } from "../";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: "hidden",
      contact: "hidden",
      experience: false,
      knowledge: false,
    };
  }
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 4000)); // 4 seconds
  }
  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("hidden");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
        }, 4000);
      }
    });
    window.onscroll = () => this.handleAnimation();
  }

  handleAnimation = () => {
    // console.log(document.documentElement.scrollTop)
    //about
    if (document.documentElement.scrollTop > 500) {
      this.setState({
        card: "card-visible",
        contact: "container-contacto",
      });
    }
    if (document.documentElement.scrollTop < 490) {
      this.setState({
        card: "hidden",
        contact: "hidden",
      });
    }
    //experience
    if (document.documentElement.scrollTop < 1400) {
      this.setState({
        experience: false,
      });
    }
    if (document.documentElement.scrollTop > 1410) {
      this.setState({
        experience: true,
        card: "hidden",
        contact: "hidden",
      });
    }
   
    //knowledge
    if (document.documentElement.scrollTop < 2130) {
      this.setState({
        knowledge: false,
      });
    }
    if (document.documentElement.scrollTop > 2140) {
      this.setState({
        knowledge: true,
      });
    }
  };

  render() {
    return (
      <div>
        <Cover />
        <About card={this.state.card} contact={this.state.contact} />
        <JobExperience experience={this.state.experience} />
        <Knowledge knowledge={this.state.knowledge} />
        <Proyects />
        <Footer />
      </div>
    );
  }
}

export default App;
