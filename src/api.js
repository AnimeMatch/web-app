import axios from "axios";
import config from "./config";

const api = axios.create({
<<<<<<< HEAD
  // baseURL: `${config.VITE_URL_DATABASE}/`
  baseURL: "/api"
=======
  baseURL: `${config.VITE_URL_ANILIST}/`
>>>>>>> b29aafdc768bca6e95e4b346968cb24fa60a4e89
});

export default api;
