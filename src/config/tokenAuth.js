import Axios from "./axios";

const tokenAuth = (token) => {
    if(token){
        Axios.defaults.headers.common["x-auth-token"] = token;
    }else{
        delete Axios.defaults.headers.common["x-auth-token"];
    }
}

export default tokenAuth;