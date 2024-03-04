import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../useSlice/userSlice";
import searchSlice from "../useSlice/searchSlice";
import postSlice from "../useSlice/postSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    search: searchSlice,
  },
});
export default store;
