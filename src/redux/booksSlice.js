import { createSlice } from "@reduxjs/toolkit";
import { fetchBooksFromAPI } from "../services/api";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    sortBy: "title",
    order: "asc"
  },
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
    setSort(state, action) {
      state.sortBy = action.payload.sortBy;
      state.order = action.payload.order;
    }
  }
});

export const { setBooks, setSort } = booksSlice.actions;

export const fetchBooks = () => (dispatch) => {
  fetchBooksFromAPI().then((books) => {
    dispatch(setBooks(books));
  });
};

export default booksSlice.reducer;
