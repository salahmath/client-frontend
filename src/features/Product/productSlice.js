// authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Productservice } from "./ProductService";
import { toast } from "react-toastify";

export const getproductss = createAsyncThunk(
  "product/getallproduct",
  async (data,thunkAPI) => {
    try {
      return await Productservice.GetAllProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const AddToLoves = createAsyncThunk(
  "product/wishlist",
  async (prodid, thunkAPI) => {
    try {
      const response = await Productservice.AddtoLove(prodid); // Call AddtoLove method
      return response; // Return response data
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // Reject with error value
    }
  }
);
export const GETproduct = createAsyncThunk(
  "product/get_a_product",
  async (prodid, thunkAPI) => {
    try {
      const response = await Productservice.getproduct(prodid); // Call AddtoLove method
      return response; // Return response data
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // Reject with error value
    }
  }
);
export const GetLoves = createAsyncThunk(
  "product/Panier",
  async (thunkAPI) => {
    try {
      const response = await Productservice.GetLove(); // Call AddtoLove method
      return response; // Return response data
    } catch (error) {
      console.log(error); // Reject with error value
    }
  }
);
export const CommenteRproduct = createAsyncThunk(
  "product/Rating",
  async (data,thunkAPI) => {
    try {
      const response = await Productservice.CommenterProduct(data); // Call AddtoLove method
      return response; // Return response data
    } catch (error) {
      console.log(error); // Reject with error value
    }
  }
);

export const ProductSlice = createSlice({
  name: "GET-ALL-PRODUCTS",
  initialState: {
    Products: [],
    produit:[],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getproductss.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(getproductss.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.Products = action.payload;
    });
    builder.addCase(getproductss.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
    });
    builder.addCase(AddToLoves.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(AddToLoves.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.AddToLoves = action.payload;
      state.message = "Product added successfully";
    });
    builder.addCase(AddToLoves.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
    });

    builder.addCase(GetLoves.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(GetLoves.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.Loves = action.payload;

    });
    builder.addCase(GetLoves.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
    });

    builder.addCase(GETproduct.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(GETproduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.produit = action.payload;

    });
    builder.addCase(GETproduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
    });

    builder.addCase(CommenteRproduct.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(CommenteRproduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.produit = action.payload;
      toast.success('Merci de votre Commentaire')

    });
    builder.addCase(CommenteRproduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
      toast.error("Desoler ilya un probleme")
    });
  },
});

export default ProductSlice.reducer;
