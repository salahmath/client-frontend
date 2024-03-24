// authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Blogservice } from "./BlogService";

export const getBlogs = createAsyncThunk(
  "blogs/getallBlogs",
  async (thunkAPI) => {
    try {
      return await Blogservice.GetAllBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getBlog = createAsyncThunk(
    "blogs/getaBlog",
    async (id,thunkAPI) => {
      try {
        return await Blogservice.GetABlog(id);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
export const BlogSlice = createSlice({
  name: "GET-ALL-Blogs",
  initialState: {
    Blogs: [],
    Blog:[],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.Blogs = action.payload;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.error;
    });
    builder.addCase(getBlog.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Blog = action.payload;
      });
      builder.addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
    
  },
});

export default BlogSlice.reducer;
