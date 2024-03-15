import axios from "axios";

const apiUser = axios.create({
  baseURL: "http://10-0-0-160:8080/"
});

export default apiUser;
