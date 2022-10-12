import axios from "axios";

const LocalHost = axios.create({
    baseURL: 'HTTPS://localhost8080/',
    timeout: 1000
});

export default LocalHost;
