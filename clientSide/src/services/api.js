/* eslint-disable no-unused-vars */
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.get("/users/:id");
