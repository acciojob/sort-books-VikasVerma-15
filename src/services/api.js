import React from "react";
export const fetchBooksFromAPI = () => {
  return fetch("https://openlibrary.org/subjects/fiction.json?limit=10")
    .then((response) => response.json())
    .then((data) => {
      return data.works.map((book) => ({
        title: book.title,
        author: book.authors?.[0]?.name || "Unknown",
        publisher: "Open Library",
        isbn: book.key
      }));
    });
};
