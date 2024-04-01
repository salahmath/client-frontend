// authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authservice } from "./useSercice"; // Corrected spelling
import {  toast } from "react-toastify"; // Importing ToastContainer and toast from react-toastify
import { useNavigate } from "react-router-dom";
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

export const GetCart = createAsyncThunk(
  "auth/Get-cart",
  async ( thunkApi) => {
    try {
      const response = await authservice.Getcart();
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const DelCart = createAsyncThunk(
  "auth/Del-cart",
  async (id, thunkApi) => {
    try {
      const response = await authservice.Delcart(id);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const Deleteaproduitpanier = createAsyncThunk(
  "auth/delete-cart",
  async ( thunkApi) => {
    try {
      const response = await authservice.deleteaproduitpanier();
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const Updatequantite = createAsyncThunk(
  "auth/upd-cart",
  async (Cart_detail, thunkApi) => {
    try {
      const response = await authservice.UpdateQuantite(Cart_detail);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const CreatOrder = createAsyncThunk(
  "auth/cree-order",

  async (order_detail, thunkApi) => {
    try {
      const response = await authservice.creeorder(order_detail);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const GetOrder = createAsyncThunk(
  "auth/Get_a_order",

  async ( thunkApi) => {
    try {
      const response = await authservice.getOrder();
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const Getauser = createAsyncThunk(
  "auth/Get_a_user",

  async ( thunkApi) => {
    try {
      const response = await authservice.getauser();
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const UpdateAuser = createAsyncThunk(
  "auth/UPDT_a_user",

  async (data, thunkApi) => {
    try {
      const response = await authservice.Update_uti(data);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const ResetToken = createAsyncThunk(
  "auth/reset_token",

  async (data, thunkApi) => {
    try {
      const response = await authservice.forgot_password(data);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const Reset_password = createAsyncThunk(
  "auth/reset_Password",

  async (data, thunkApi) => {
    try {
      const response = await authservice.Reset_password(data);
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
    CreatOrder:[],
    orders:[],
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
        setTimeout(() => {
          window.location.href = "/"; // Rediriger vers la page d'accueil
        }, 3000);

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
        toast.success("Cartfulfilled")
      });
      builder.addCase(CreeCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
        toast.error("Error"); // Corrected toast type
      });

      builder.addCase(GetCart.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(GetCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Panier = action.payload;
      });
      builder.addCase(GetCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
      });
      builder.addCase(DelCart.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(DelCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Delcartproduct = action.payload;
        toast.success("del cart")

      });
      builder.addCase(DelCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
      })

      builder.addCase(Updatequantite.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(Updatequantite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Updatequantite = action.payload;
        toast.success("updated quantity")

      });
      builder.addCase(Updatequantite.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
      })

      builder.addCase(CreatOrder.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(CreatOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.CreatOrder = action.payload;
        toast.success("created successful ")

      });
      builder.addCase(CreatOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
        toast.error("created erreur ")

      })


      builder.addCase(GetOrder.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(GetOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.orders = action.payload;

      });
      builder.addCase(GetOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
        toast.error("impossible de trouver votre commande ")

      })


      
      builder.addCase(Getauser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(Getauser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Auser = action.payload;

      });
      builder.addCase(Getauser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";

      })


      builder.addCase(UpdateAuser.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(UpdateAuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updated =action.payload
        toast.success("updated successful ")
      });
      builder.addCase(UpdateAuser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";

      })

      builder.addCase(ResetToken.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(ResetToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Forgot_token =action.payload
        toast.success("Email send Succesfully ")
      });
      builder.addCase(ResetToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
        toast.error("error ")


      })


      builder.addCase(Reset_password.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(Reset_password.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Reset =action.payload
        toast.success(" Nouveau mot de passe enregistrer")
      });
      builder.addCase(Reset_password.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
        toast.error("error ")


      })

      builder.addCase(Deleteaproduitpanier.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(Deleteaproduitpanier.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Deleteaproduitpanier =action.payload
        toast.success("delete successful")
      });
      builder.addCase(Deleteaproduitpanier.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
        toast.error("ilya un erreur ")


      })
  },
});

export default authSlice.reducer;
