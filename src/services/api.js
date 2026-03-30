import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const saveResume = (data) => API.post("/resume/create", data);
export const getResumes = () => API.get("/resume");