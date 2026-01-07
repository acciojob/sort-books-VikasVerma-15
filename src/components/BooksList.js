import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, setSort } from "../redux/booksSlice";

const BooksList = () => {
  const dispatch = useDispatch();

 const { books = [], sortBy, order } = useSelector(
  (state) => state.books || {}
);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const sortedBooks = [...books].sort((a, b) => {
    const aVal = a[sortBy].toLowerCase();
    const bVal = b[sortBy].toLowerCase();

    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div>
      <h1>Books List</h1>

      {/* Sort By */}
<label htmlFor="sortBy">Sort by:</label>
<select
  id="sortBy"
  value={sortBy}
  onChange={(e) =>
    dispatch(setSort({ sortBy: e.target.value, order }))
  }
>
  <option value="title">Title</option>
  <option value="author">Author</option>
  <option value="publisher">Publisher</option>
</select>

{/* Order */}
<label htmlFor="order">Order:</label>
<select
  id="order"
  value={order}
  onChange={(e) =>
    dispatch(setSort({ sortBy, order: e.target.value }))
  }
>
  <option value="asc">Ascending</option>
  <option value="desc">Descending</option>
</select>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
  {books.length > 0 ? (
    sortedBooks.map((book, index) => (
      <tr key={index}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.publisher}</td>
        <td>{book.isbn}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No books available</td>
    </tr>
  )}
</tbody>
      </table>
    </div>
  );
};

export default BooksList;
