import axios from "axios";

const api = axios.create({
    baseURL: "https://pet-share-api.vercel.app",
})

export default api
