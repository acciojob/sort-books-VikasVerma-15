import { useSelector, useDispatch } from "react-redux";
import { setSortBy, setOrder } from "../redux/booksSlice";

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, sortBy, order } = useSelector((state) => state.books);

  const sortedBooks = [...books].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return order === "asc" ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return order === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div>
      <h1>Books List</h1>

      {/* Sort By */}
      <select
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="year">Year</option>
      </select>

      {/* Order */}
      <select
        value={order}
        onChange={(e) => dispatch(setOrder(e.target.value))}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
