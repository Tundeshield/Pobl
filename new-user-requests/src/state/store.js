import { configureStore } from "@reduxjs/toolkit";
import requestSlice from "./Requests";

export const store = configureStore({
  reducer: {
    state: requestSlice,
  },
});
