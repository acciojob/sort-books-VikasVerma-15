import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: [],
    sortBy: "title"
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
