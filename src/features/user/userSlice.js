import { isRejectedWithValue } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsynceUsers = createAsyncThunk(
  "users/getAsynceUsers",
  async (_, { isRejectedWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  },
);

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userSlice = creareSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getAsynceUsers.pending]: (state, action) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    },
    [getAsynceUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getAsynceUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
