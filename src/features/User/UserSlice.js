// authSlice.js
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authservice } from "./useSercice"; // Corrected spelling
import { toast } from "react-toastify"; // Importing ToastContainer and toast from react-toastify
import { useNavigate } from "react-router-dom";

const getclientlocalstorage = localStorage.getItem("Client")
  ? JSON.parse(localStorage.getItem("Client"))
  : null;
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
export const payer = createAsyncThunk(
  "auth/payer",
  async (userData, thunkApi) => {
    try {
      const response = await authservice.pay(userData);
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

export const GetCart = createAsyncThunk("auth/Get-cart", async (thunkApi) => {
  try {
    const response = await authservice.Getcart();
    return response;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

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
  async (thunkApi) => {
    try {
      const response = await authservice.deleteaproduitpanier();
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const Applycoupon = createAsyncThunk(
  "auth/Applycoupon",
  async (data, thunkApi) => {
    try {
      const response = await authservice.apllycoupon(data);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const Getacoupon = createAsyncThunk(
  "auth/Getacoupon",
  async (data, thunkApi) => {
    try {
      const response = await authservice.getacoupon(data);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const GetAllcoupon = createAsyncThunk(
  "auth/Getallcoupon",
  async (thunkApi) => {
    try {
      const response = await authservice.getAllcoupon();
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

  async (thunkApi) => {
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

  async (thunkApi) => {
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

export const Addenq = createAsyncThunk(
  "auth/Ajouter_enquiry",

  async (enqdata, thunkApi) => {
    try {
      const response = await authservice.addenq(enqdata);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const geteteenquirys = createAsyncThunk(
  "enquiry/getenquiries2",
  async (thunkAPI) => {
    try {
      return await authservice.getenquirys();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Up2 = createAsyncThunk("enquiry/up2", async (data, thunkAPI) => {
  try {
    return await authservice.up2(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const Udateorder = createAsyncThunk(
  "order/udate_order2",
  async (data, thunkAPI) => {
    try {
      return await authservice.udatestatus(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateaquan2 = createAsyncThunk(
  "products/update_quan_lors_l'annulation2",
  async (Data, thunkAPI) => {
    try {
      return await authservice.updatquan2(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Konnect = createAsyncThunk(
  "products/konnect",
  async (Data, thunkAPI) => {
    try {
      return await authservice.konnect(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Chek = createAsyncThunk(
  "products/chek",
  async (Data, thunkAPI) => {
    try {
      return await authservice.chek(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const GetAllOrdersanspay = createAsyncThunk(
  "products/getAllOrdersanspay",
  async (Data, thunkAPI) => {
    try {
      return await authservice.getAllOrdersanspay();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const GetAuser = createAsyncThunk(
  "products/GetAuser",
  async (Data, thunkAPI) => {
    try {
      return await authservice.Getauser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const Send = createAsyncThunk(
  "products/Send-ail",
  async (Data, thunkAPI) => {
    try {
      return await authservice.Sendes(Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const exporState = createAction("Reset_all");
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getclientlocalstorage,
    Cart: [],
    CreatOrder: [],
    orders: [],
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
      state.message1 = action.payload;
      toast.success("Vous avez été inscrit avec succès");
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("Désolé, il y a une erreur"); // Corrected toast type
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
      localStorage.setItem("token", action.payload.token);
      toast.info("Connexion réussie");
       setTimeout(() => {
         window.location.href = "/"; // Rediriger vers la page d'accueil */
      }, 3000); 
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";

      toast.error("Désolé, il y a une erreur"); // Corrected toast type
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
      toast.success("Panier satisfait");
    });
    builder.addCase(CreeCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("Désolé, il y a une erreur"); // Corrected toast type
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
      toast.success("Panier supprimé avec succès");
    });
    builder.addCase(DelCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
    });

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
      toast.success("Quantité mise à jour avec succès");
    });
    builder.addCase(Updatequantite.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
    });

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
      toast.success("Commande créée avec succès");
    });
    builder.addCase(CreatOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("Désolé, il y a une erreur");
    });

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
      toast.error("Impossible de trouver votre commande");
    });

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
    });

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
      state.updated = action.payload;
      toast.success("Mise à jour effectuée avec succès");
    });
    builder.addCase(UpdateAuser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
    });

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
      state.Forgot_token = action.payload;
      toast.success("E-mail envoyé avec succès");
    });
    builder.addCase(ResetToken.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("Désolé, il y a une erreur ");
    });

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
      state.Reset = action.payload;
      toast.success(" Nouveau mot de passe enregistrer avec succès");
    });
    builder.addCase(Reset_password.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("error ");
    });

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
      state.Deleteaproduitpanier = action.payload;
      toast.success("Produit supprimé avec succès");
    });
    builder.addCase(Deleteaproduitpanier.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("Désolé, il y a une erreur ");
    });

    builder.addCase(Applycoupon.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(Applycoupon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.Applycoupon = action.payload;
      toast.success("Coupon appliqué avec succès");
    });
    builder.addCase(Applycoupon.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("Désolé, il y a une erreur");
    });

    builder.addCase(Getacoupon.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(Getacoupon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.Getacoupon = action.payload;
    });
    builder.addCase(Getacoupon.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
    });

    builder.addCase(GetAllcoupon.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(GetAllcoupon.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.GetAllcoupon = action.payload;
    });
    builder.addCase(GetAllcoupon.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
    });

    builder.addCase(Addenq.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(Addenq.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.Addenq = action.payload;
      toast.success("Message envoyé avec succès");
    });
    builder.addCase(Addenq.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("Désolé, il y a une erreur ");
    });

    builder.addCase(geteteenquirys.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(geteteenquirys.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.geteteenquirys = action.payload;
    });
    builder.addCase(geteteenquirys.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("Désolé, il y a une erreur ");
    });

    builder.addCase(payer.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(payer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.payer = action.payload;
    });
    builder.addCase(payer.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = "";
      toast.error("Désolé, il y a une erreur ");
    });

    builder.addCase(Up2.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(Up2.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.Up2 = action.payload;
    });
    builder
      .addCase(Up2.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
        toast.error("Désolé, il y a une erreur ");
      })
      .addCase(Udateorder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Udateorder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Udateorder = action.payload;
        toast.success("Statut mis à jour avec succès");
      })

      .addCase(Udateorder.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        toast.error("Désolé, il y a une erreur ");
      })

      .addCase(updateaquan2.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateaquan2.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.isupdated = false;
        state.update_Product = action.payload;
      })
      .addCase(updateaquan2.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })

      .addCase(Konnect.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Konnect.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.isupdated = false;
        state.Konnect = action.payload;
      })
      .addCase(Konnect.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        toast.error("Désolé, il y a une erreur....Ressayer");

      })
      .addCase(Chek.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Chek.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.isupdated = false;
        state.Chek = action.payload;
      })
      .addCase(Chek.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })

      .addCase(GetAllOrdersanspay.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllOrdersanspay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.isupdated = false;
        state.GetAllOrdersanspay = action.payload;
      })
      .addCase(GetAllOrdersanspay.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })

      .addCase(GetAuser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAuser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.isupdated = false;
        state.GetAuser = action.payload;
      })
      .addCase(GetAuser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(Send.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Send.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.isupdated = false;
        state.Send = action.payload;
        toast.success("verifier votre téléphone")
      })
      .addCase(Send.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        toast.error("Ce numéro est déjà inscrit... essayez avec un autre numéro ou vérifier votre connexion")
      })
      .addCase(exporState, () => authSlice);
  },
});

export default authSlice.reducer;
