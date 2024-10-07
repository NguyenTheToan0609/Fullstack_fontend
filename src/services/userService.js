import { EmitFlags } from "typescript";
import axios from "../axios";

const hanldeLogin = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getAllUser = (id) => {
  return axios.get(`api/get-all-user?id=${id}`);
};

const createNewUser = (data) => {
  return axios.post(`api/create-new-user`, data);
};

const deleteUser = (userId) => {
  return axios.delete("api/delete-user", {
    data: {
      id: userId,
    },
  });
};

const editUser = (userId) => {
  return axios.put("api/edit-user", userId);
};

export { hanldeLogin, getAllUser, createNewUser, deleteUser, editUser };
