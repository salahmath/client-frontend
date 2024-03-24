// authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authservice } from "./useSercice"; // Corrected spelling
import {  toast } from "react-toastify"; // Importing ToastContainer and toast from react-toastify
const getclientlocalstorage = localStorage.getItem("Client")? JSON.parse(localStorage.getItem("Client")):null

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const response = await authservice.register(userData);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const LoginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const response = await authservice.loginuser(userData);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const CreeCart = createAsyncThunk(
  "auth/cree-cart",
  async (userData, thunkApi) => {
    try {
      const response = await authservice.Creecart(userData);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getclientlocalstorage,
    Cart:[],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = action.payload;
      toast.info("Success");
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";

      toast.error("Error"); // Corrected toast type
    });

    builder.addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
        localStorage.setItem("token",action.payload.token)
        toast.info(" login Success");
      });
      builder.addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
  
        toast.error("Error"); // Corrected toast type
      });
      builder.addCase(CreeCart.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(CreeCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Cart = action.payload;
      });
      builder.addCase(CreeCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
        toast.error("Error"); // Corrected toast type
      });
  },
});

export default authSlice.reducer;
