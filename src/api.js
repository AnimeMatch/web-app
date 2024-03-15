import axios from "axios";

const api = axios.create({
  baseURL: "http://10-0-0-160:8081/"
});

export default api;
