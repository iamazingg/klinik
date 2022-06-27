import axios from "axios";
const config = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

export default config;