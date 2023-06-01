import axios from "axios";

axios.defaults.baseURL = "https://64635d734dca1a66135ba7bc.mockapi.io";
// ================ get users===========================
export const getUserApi = () => {
  return axios.get("/users").then((res) => res);
};
// ================ put user with updated followers===========================
export const putUpdatedUserApi = (user) => {
  return axios.put(`/users/${user.id}`, { ...user }).then((res) => res);
};
