import axios from "axios";

const LocalHost = axios.create({
  baseURL: "http://localhost:8080/",
});

export default LocalHost;
