import { combineReducers } from 'redux';
import proyectosReducer from "./proyectosReducer";
import authReducer from "./authReducer";

export default combineReducers({
     proyectos: proyectosReducer,
     auth: authReducer,
})