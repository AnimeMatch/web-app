import axios from "axios";
import config from "./config";

const apiUser = axios.create({
<<<<<<< HEAD
  // baseURL: `${config.VITE_URL_ANILIST}/`
  baseURL: "/api2"
=======
  baseURL: `${config.VITE_URL_DATABASE}/`
>>>>>>> b29aafdc768bca6e95e4b346968cb24fa60a4e89
});

export default apiUser;
