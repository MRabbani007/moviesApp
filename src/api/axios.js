import axios from "axios";

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://onlinestoreserver-hc3z.onrender.com";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
