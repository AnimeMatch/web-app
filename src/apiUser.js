import axios from "axios";
// import config from "./config";

const apiUser = axios.create({
  // baseURL: `${config.VITE_URL_ANILIST}/`
  baseURL: "/apo"
});

apiUser.interceptors.request.use(
  (config) => {

    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  (error) => {
    return Promise.reject(error);
});

export default apiUser;
