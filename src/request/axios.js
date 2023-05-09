import axios from "axios";

const service = axios.create({
    baseURL: "http://localhost:7777",
    withCredentials: true,
    timeout: 3000,
})

export default service