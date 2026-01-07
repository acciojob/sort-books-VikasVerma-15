import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooksFromAPI } from "../services/api";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async () => {
    return await fetchBooksFromAPI();
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
    sortBy: "title",
    order: "asc"
  },
  reducers: {
    setSort(state, action) {
      state.sortBy = action.payload.sortBy;
      state.order = action.payload.order;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { setSort } = booksSlice.actions;
export default booksSlice.reducer;
