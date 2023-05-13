import { configureStore } from "@reduxjs/toolkit";
import { requestSlice } from "./requests";

export const store = configureStore({
  reducer: {
    state: requestSlice,
  },
});
