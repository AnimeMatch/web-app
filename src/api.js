import axios from "axios";
// import config from "./config";

const api = axios.create({
  // baseURL: `${config.VITE_URL_DATABASE}/`
  baseURL: "/api"
});

api.interceptors.request.use(
  (config) => {

    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  (error) => {
    return Promise.reject(error);
});
export default api;
