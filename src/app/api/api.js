import axios from 'axios';

const baseUrl = 'https://64635d734dca1a66135ba7bc.mockapi.io';
axios.defaults.baseURL = baseUrl;

// =============GET USERS================
export const getUsersApi = () => axios.get('/users').then((res) => res.data);
// =============PUT USER BY ID==========
export const putUserByIdApi = (id, payload) =>
  axios.put(`/users/${id}`, { ...payload }).then((res) => res);
