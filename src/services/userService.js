import { EmitFlags } from "typescript";
import axios from "../axios";

const hanldeLogin = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUser = (id) => {
  return axios.get(`api/get-all-user?id=${id}`);
};
export { hanldeLogin, getAllUser };
