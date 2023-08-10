import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL:  "https://ehealth-backend.vercel.app/api",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': "*",
    'X-Requested-With':'XMLHttpRequest'
  },
});

export default apiClient;