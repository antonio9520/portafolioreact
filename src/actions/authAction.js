import {
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  OBTENER_TOKEN,
  CERRAR_SESION,
} from "../types";
import Axios from "../config/axios";
import tokenAuth from "../config/tokenAuth";

export function iniciarSesionAction(usuario) {
  return async (dispatch) => {
    try {
      const result = await Axios.post("/api/auth", usuario);
      dispatch(loginExitoso(result.data));
      dispatch(obtenerTokenAction());
    } catch (error) {
      console.log(error);
      dispatch(loginError());
    }
  };
}

const loginError = () => ({
  type: LOGIN_ERROR,
});
const loginExitoso = (data) => ({
  type: LOGIN_EXITOSO,
  payload: data,
});

export function obtenerTokenAction() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
      dispatch(obtenerToken());
    }
  };
}

const obtenerToken = () => ({
  type: OBTENER_TOKEN,
});

export function cerrarSesionAction() {
  return (dispatch) => {
    dispatch(cerrarSesion());
  };
}

const cerrarSesion = () => ({
  type: CERRAR_SESION,
});
