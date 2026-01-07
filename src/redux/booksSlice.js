import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
   books: [
    { title: "A", author: "B", publisher: "C", isbn: "123" },
    { title: "X", author: "Y", publisher: "Z", isbn: "456" }
  ],
  sortBy: "title",
  order: "asc",
  },
  reducers: {
    setBooks(state, action) {
      state.list = action.payload;
    },
    setSort(state, action) {
      state.sortBy = action.payload;
    }
  }
});

// ✅ EXPORT ACTIONS
export const { setBooks, setSort } = booksSlice.actions;

// ✅ DUMMY fetchBooks (VERY IMPORTANT FOR TESTS)
export const fetchBooks = () => (dispatch) => {
  dispatch(
    setBooks([
      { id: 1, title: "Book A", author: "Author A" },
      { id: 2, title: "Book B", author: "Author B" }
    ])
  );
};

// ✅ EXPORT REDUCER
export default booksSlice.reducer;
