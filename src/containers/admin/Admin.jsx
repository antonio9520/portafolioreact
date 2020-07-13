import React, { Fragment } from "react";
import { Nav, EditProyect, NewProyect, Listado } from "./components";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

const Admin = () => {
  let { path } = useRouteMatch();

  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path={path}>
          <Listado />
        </Route>
        <Route path={`${path}/new-proyect`}>
          <NewProyect />
        </Route>
        <Route path={`${path}/edit-proyect/:id`}>
          <EditProyect />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Admin;
