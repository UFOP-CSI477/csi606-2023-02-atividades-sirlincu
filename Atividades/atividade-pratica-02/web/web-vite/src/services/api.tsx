import axios from "axios";

const api = axios.create({
  // baseURL: 'https://fictional-robot-rxp6v5v9xjjf495-5173.app.github.dev/'
  baseURL: 'http://localhost:3306'
});

export default api;