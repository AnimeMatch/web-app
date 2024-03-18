import axios from "axios";
import config from "./config";

const api = axios.create({
  // baseURL: `${config.VITE_URL_DATABASE}/`
  baseURL: "/api"
});

export default api;
