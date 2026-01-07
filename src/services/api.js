export const fetchBooksFromAPI = async () => {
  const response = await fetch(
    "https://openlibrary.org/subjects/fiction.json?limit=20"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await response.json();

  return data.results.books.map((book) => ({
    title: book.title,
    author: book.author,
    publisher: book.publisher,
    isbn: book.primary_isbn13
  }));
};
