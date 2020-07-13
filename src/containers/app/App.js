import React from "react";
import "./App.css";
import { Hidden } from "@material-ui/core";
import { Contenido, Admin, Login } from "../";
import { NavSticky, MenuMdDown } from "../../components";
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
  return (
    <Router>
      <Provider store={store}>
        <NavSticky />
        <Hidden mdUp>
          <MenuMdDown />
        </Hidden>
        <Switch>
          <Route exact path="/">
            <Contenido />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Privado path="/admin" component={Admin}></Privado>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
