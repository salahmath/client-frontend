// authservice.js
import axios from 'axios';
import { getClient, url } from '../../utils/URL';
const Client =getClient()
const register = async (userData) => {
    const response = await axios.post(`${url}user/register`, userData);
    return response.data;
}
const loginuser = async (userData) => {
    const response = await axios.post(`${url}user/login`, userData);
    if(response.data){
        localStorage.setItem("Client",JSON.stringify(response.data))
    }return response.data;
}
const Creecart = async (userData) => {
    const response = await axios.post(`${url}cart/creecart`, userData, Client);
    return response.data;
}
export const authservice = {
    register,loginuser,Creecart
};
