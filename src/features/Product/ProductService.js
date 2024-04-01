// authservice.js
import axios from "axios";
import { getClient, url } from "../../utils/URL";
const client = getClient();


const GetAllProduct = async (data) => {
  console.log(data);

  const response = await axios.get(`${url}product/getallproduct?${data?.marques ? `brand=${data.marques}&` : ''}${data?.tag ? `tags=${data.tag}&` : ''}${data?.categorys ? `category=${data.categorys}` : ''}`);
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

const CommenterProduct = async (data) => {
  try {
    const response = await axios.put(`${url}product/rate`, {
      prodid: data.ProdId,
      comment: data.comment,
      star: data.rate
    },client);
    // Traitez la réponse ici si nécessaire
    console.log(response.data); // Par exemple, afficher les données de réponse dans la console
  } catch (error) {
    console.error("Une erreur s'est produite:", error);
    // Gérer les erreurs ici
  }
};

export const Productservice = {
  GetAllProduct,
  AddtoLove,
  GetLove,
  getproduct,
  CommenterProduct
};
