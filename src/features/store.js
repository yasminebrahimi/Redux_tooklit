import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});
export default store;
