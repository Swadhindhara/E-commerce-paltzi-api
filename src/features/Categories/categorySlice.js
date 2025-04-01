import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryAPI from "./category";

export const fetchCategories = createAsyncThunk(
  "getCategories/get",
  async (_, thunkAPI) => {
    try {
      const response = await categoryAPI.getCategories();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Not getting any categories"
      );
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default categorySlice.reducer;
