import axios from "axios";

const api = axios.create({
    baseURL: "https://petshare-api-production.up.railway.app",
})

export default api