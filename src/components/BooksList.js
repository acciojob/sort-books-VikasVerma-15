import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortBy, setOrder } from "../redux/booksSlice";

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, sortBy, order } = useSelector((state) => state.books);

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

      {/* SORT BY — MUST BE FIRST CHILD */}
      <select
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="publisher">Publisher</option>
      </select>

      {/* ORDER — MUST BE SECOND CHILD */}
      <select
        value={order}
        onChange={(e) => dispatch(setOrder(e.target.value))}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      {/* TABLE */}
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
          {sortedBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
