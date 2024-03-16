import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: `${config.VITE_URL_DATABASE}/`
});

export default api;
