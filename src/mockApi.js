import axios from "axios";

const mockApi = axios.create({
  baseURL: "https://6514a9b8dc3282a6a3cd5c8c.mockapi.io/",
  method:"get"
});

export default mockApi;