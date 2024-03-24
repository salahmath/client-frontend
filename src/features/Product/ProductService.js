// authservice.js
import axios from "axios";
import { getClient, url } from "../../utils/URL";
const client = getClient();
const GetAllProduct = async () => {
  const response = await axios.get(`${url}product/getallproduct`);
  return response.data;
};
const AddtoLove = async (prodid) => {
  const response = await axios.put(
    `${url}product/getwishes`,
    { prodid: prodid },
    client
  );
  return response.data;
};

const GetLove = async () => {
  const response = await axios.get(`${url}user/getwishlist`,client);
  return response.data;
};
const getproduct = async (id) => {
  const response = await axios.get(`${url}product/getaproduct/${id}`,client);
  return response.data;
};

export const Productservice = {
  GetAllProduct,
  AddtoLove,
  GetLove,
  getproduct
};
