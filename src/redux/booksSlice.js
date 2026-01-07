import { createSlice } from "@reduxjs/toolkit";

// EXACTLY 60 books
const booksData = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  title: `Book ${String.fromCharCode(65 + (i % 26))}`,
  author: `Author ${i}`,
  year: 2000 + (i % 20),
}));

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: booksData,
    sortBy: "title",
    order: "asc",
  },
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const { setSortBy, setOrder } = booksSlice.actions;
export default booksSlice.reducer;
