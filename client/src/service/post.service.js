import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../api/axios";

// hàm lấy dữ liệu
export const findAllPost = createAsyncThunk("post/findAll", async () => {
  try {
    // gọi api lấy dữ liệu
    const response = await baseUrl.get("posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// hàm xóa 1 bản ghi theo id
export const removePost = createAsyncThunk("post/remove", async (id) => {
  try {
    let response = await baseUrl.delete(`posts/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
});

//hàm tìm kiếm thông tin một bản ghi theo id
export const findOnePost = createAsyncThunk("post/findOne", async (id) => {
  try {
    let response = await baseUrl.get(`posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const createPost = createAsyncThunk("post/post", async (data) => {
  try {
    let response = await baseUrl.post(`posts`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const uploadPost = createAsyncThunk(
  "patch/post",
  async ({ id, statusUpdate }) => {
    try {
      const response = await baseUrl.patch(`posts/${id}`, statusUpdate);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
