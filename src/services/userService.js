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

const getAllCode = (typeInput) => {
  return axios.get(`api/allcode?type=${typeInput}`);
};

const getTopDoctorHomeService = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

export {
  hanldeLogin,
  getAllUser,
  createNewUser,
  deleteUser,
  editUser,
  getAllCode,
  getTopDoctorHomeService,
};
