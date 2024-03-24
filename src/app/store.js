import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../features/User/UserSlice";
import Productreducer from "../features/Product/productSlice";
import Blogreducer from "../features/Blogs/BlogSlice";

export const store = configureStore({
  reducer: {
    auth: authreducer,
    Product: Productreducer,
    Blog: Blogreducer,
  },
});
