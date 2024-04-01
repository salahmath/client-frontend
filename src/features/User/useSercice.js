// authservice.js
import axios from "axios";
import { getClient, url } from "../../utils/URL";
const Client = getClient();
const register = async (userData) => {
  const response = await axios.post(`${url}user/register`, userData);
  return response.data;
};
const loginuser = async (userData) => {
  const response = await axios.post(`${url}user/login`, userData);
  if (response.data) {
    localStorage.setItem("Client", JSON.stringify(response.data));
  }
  return response.data;
};
const Creecart = async (userData) => {
  const response = await axios.post(`${url}user/creecart`, userData, Client);
  return response.data;
};
const deleteaproduitpanier = async () => {
  const response = await axios.delete(`${url}user/deleteProductFromPanier`, Client);
  return response.data;
};

const Getcart = async (userData) => {
  const response = await axios.get(`${url}user/getusercart`, Client);
  return response.data;
};

const Delcart = async (id) => {
  const response = await axios.delete(`${url}user/deleteAcart/${id}`, Client);
  return response.data;
};
const getauser = async (id) => {
  const response = await axios.get(`${url}user/getauser`, Client);
  return response.data;
};

const UpdateQuantite = async (CartData) => {
  const response = await axios.put(
    `${url}user/updatecart/${CartData.Cart_id}/${CartData.quantite}`,
    Client,
    Client
  );
  return response.data;
};

const creeorder = async (orderData) => {
  const response = await axios.post(
    `${url}user/cart/createorder`,
    orderData,
    Client
  );
  return response.data;
};

const getOrder = async () => {
  const response = await axios.get(`${url}user/getOrder`, Client);
  return response.data;
};

const Update_uti = async (data) => {
  const response = await axios.put(`${url}user/updateauser`,{lastname :data.lastname , Secondname:data.Secondname ,mobile:data.mobile,email:data.email}, Client);
  return response.data;
};

const forgot_password = async (data) => {
  const response = await axios.post(`${url}user/forgot-password-token`,{email:data.email}, Client);
  return response.data;
};

const Reset_password = async (token) => {
  const response = await axios.put(`${url}user/reset-password/${token.token}`,{password: token.password}, Client);
  return response.data;
};
export const authservice = {
  register,
  loginuser,
  Creecart,
  Getcart,
  Delcart,
  UpdateQuantite,
  creeorder,
  getOrder,
  getauser,
  Update_uti,
  Reset_password,
  forgot_password,
  deleteaproduitpanier
};
