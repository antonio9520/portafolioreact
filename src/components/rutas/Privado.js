import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { obtenerTokenAction } from "../../actions/authAction";

const Privado = ({ component: Component, ...props }) => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { autenticado, token } = auth;
  
  useEffect(() => {
    dispatch(obtenerTokenAction());
    //eslint-disable-next-line
  },[]);
  
  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado && !token ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default Privado;
