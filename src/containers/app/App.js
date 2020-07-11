import React, {useState, useEffect} from "react";
import "./App.css";
import { Contenido, Admin, Login } from "../";
import { NavSticky} from "../../components"
import Privado from "../../components/rutas/Privado";
import { Provider } from "react-redux";
import store from "../../store/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import tokenAuth from "../../config/tokenAuth";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}
function App() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   function onScroll() {
  //     let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
  //     if (currentPosition > scrollTop) {
  //       // downscroll code
  //       setScrolling(false);
  //     } else {
  //       // upscroll code
  //       setScrolling(true);
  //     }
  //     setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
  //   }

  //   window.addEventListener("scroll", onScroll);
  //   return window.addEventListener("scroll", onScroll);
  // }, [scrollTop]);

  return (
    <Router>
      <Provider store={store}>
      <NavSticky />
        <Switch>
          <Route exact path="/">
            <Contenido />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Privado path="/admin" component={Admin}>
          </Privado>
          {/* <Route path="/admin" >
         <Admin />
      </Route> */}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
