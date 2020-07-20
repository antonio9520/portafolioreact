import React, { Component } from "react";
import "./App.css";
import { Cover, JobExperience, Knowledge, Proyects, About, Footer } from "../";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: "hidden",
      contact: "hidden",
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
  };

  render() {
    return (
      <div>
        <Cover />
        <About
          
          card={this.state.card}
          contact={this.state.contact}
        />
        <JobExperience />
        <Knowledge />
        <Proyects />
        <Footer />
      </div>
    );
  }
}

export default App;
