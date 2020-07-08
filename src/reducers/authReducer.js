import {
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  OBTENER_TOKEN,
  CERRAR_SESION,
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  autenticado: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
      };
    case OBTENER_TOKEN:
      return {
        ...state,
        autenticado: true,
      };
    case CERRAR_SESION:
    case LOGIN_ERROR:
        localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        autenticado: null,
      };

    default:
      return state;
  }
}
