import React, { useState, useEffect } from "react";
import "./Login.css";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { iniciarSesionAction, obtenerTokenAction } from "../../../../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom";


const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth)
  const{ autenticado } = auth; 
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = login;
  const changeForm = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(obtenerTokenAction())
     if(autenticado){
         history.push("/admin")
     }
  }, [autenticado])

  const submitForm = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      console.log("llene el formulario");
      return;
    }
    dispatch(iniciarSesionAction({ email, password }));
    console.log("submmit")
  };
  return (
    <Grid container justify="center" className="container-login">
      <Grid item xs={12} sm={12} md={6}>
        <form onSubmit={submitForm}>
          <Grid container justify="center" className="cont-form">
            <Grid item xs={12} sm={12} md={12} className="grid-item">
              <Typography style={{ color: "#555555" }} variant="h4">
                Login
              </Typography>
            </Grid>
            <Grid item xs={10} sm={10} md={10} className="grid-item">
              <TextField
                onChange={changeForm}
                label="Email"
                fullWidth
                name="email"
              ></TextField>
            </Grid>
            <Grid item xs={10} sm={10} md={10} className="grid-item">
              <TextField
                type="password"
                onChange={changeForm}
                label="Password"
                fullWidth
                name="password"
              ></TextField>
            </Grid>
            <Grid item xs={10} sm={10} md={12} className="grid-item">
              <Button type="submit" color="primary">
                Entrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
