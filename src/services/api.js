import axios from "axios";

const api = axios.create({
  baseURL: "http://hogweb-codes.umbler.net"
});

export default api;
