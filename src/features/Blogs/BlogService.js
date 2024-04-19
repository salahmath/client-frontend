// authservice.js
import axios from "axios";
import { url } from "../../utils/URL";

const GetAllBlogs = async () => {
  const response = await axios.get(`${url}blog/getallblog`);
  return response.data;
};
const GetABlog = async (id) => {
  const response = await axios.get(`${url}blog/getblog/${id}`);
  return response.data;
};
const GetABlogcat = async (id) => {
  const response = await axios.get(`${url}blogcategory/getallcategory`);
  return response.data;
};

export const Blogservice = {
  GetAllBlogs,
  GetABlog,
  GetABlogcat
};
