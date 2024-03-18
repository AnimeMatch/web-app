import axios from "axios";
import config from "./config";

const apiUser = axios.create({
  // baseURL: `${config.VITE_URL_ANILIST}/`
  baseURL: "/api2"
});

export default apiUser;
