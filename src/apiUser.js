import axios from "axios";
import config from "./config";

const apiUser = axios.create({
  baseURL: `http://${config.VITE_URL_ANILIST}/`
});

export default apiUser;
