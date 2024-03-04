import { createSlice } from "@reduxjs/toolkit";
import {
  findOnePost,
  removePost,
  findAllPost,
  createPost,
  uploadPost,
} from "../../service/post.service";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    postEdit: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAllPost.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findAllPost.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = action.payload;
      })
      .addCase(findAllPost.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(removePost.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data = state.data.filter(
          (user) => user.id !== action.payload.data.id
        );
      })
      .addCase(removePost.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(findOnePost.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findOnePost.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.userEdit = action.payload;
      })
      .addCase(findOnePost.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(createPost.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.data.unshift(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message;
      })
      .addCase(uploadPost.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(uploadPost.fulfilled, (state, action) => {
        state.status = "Success";
        state.data = state.data.map((post) => {
          if (post.id === action.payload.id) {
            return { ...post, ...action.payload };
          }
          return post;
        });
      })
      .addCase(uploadPost.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
