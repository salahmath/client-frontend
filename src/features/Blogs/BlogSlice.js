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
  export const getBlogcategories = createAsyncThunk(
    "blogs/getaBlogcat",
    async (thunkAPI) => {
      try {
        return await Blogservice.GetABlogcat();
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const Likeblog = createAsyncThunk(
    "blogs/like_Blog",
    async (data,thunkAPI) => {
      try {
        return await Blogservice.likeblog(data);
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
      builder.addCase(getBlogcategories.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(getBlogcategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Blogcat = action.payload;
      });
      builder.addCase(getBlogcategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });


      builder.addCase(Likeblog.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      });
      builder.addCase(Likeblog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Like = action.payload;
      });
      builder.addCase(Likeblog.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default BlogSlice.reducer;
