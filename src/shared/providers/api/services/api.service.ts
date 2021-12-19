import axios from "axios";

export const api = axios.create({ baseURL: "https://nango-domain-api.herokuapp.com" })