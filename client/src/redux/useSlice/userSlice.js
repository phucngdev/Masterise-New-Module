import { createSlice } from "@reduxjs/toolkit";
import { findAll, findOne, post, remove } from "../../service/user.service";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    userEdit: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAll.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findAll.fulfilled, (state, action) => {
        state.status = "Successfully!"; // trả về trạng thái thành công
        state.data = action.payload; // gán lại dữ liệu lấy từ api cho giá trị khởi tạo
      })
      .addCase(findAll.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message; // lấy ra nội dung lỗi
      })
      .addCase(remove.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.status = "Successfully!";
        // cập nhật lại dữ liệu
        state.data = state.data.filter(
          (user) => user.id !== action.payload.data.id
        );
      })
      .addCase(findOne.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(findOne.fulfilled, (state, action) => {
        state.status = "Successfully!";
        state.userEdit = action.payload;
      })
      .addCase(findOne.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message; // lấy ra nội dung lỗi
      })
      .addCase(post.pending, (state) => {
        state.status = "Pending!";
      })
      .addCase(post.fulfilled, (state, action) => {
        state.status = "Successfully!"; // trả về trạng thái thành công
        state.data = action.payload; // gán lại dữ liệu lấy từ api cho giá trị khởi tạo
      })
      .addCase(post.rejected, (state, action) => {
        state.status = "Failed!";
        state.error = action.error.message; // lấy ra nội dung lỗi
      });
  },
});

export default userSlice.reducer;
