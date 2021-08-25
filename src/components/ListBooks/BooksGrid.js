import React from "react";
import Book from "./Book";

const BooksGrid = ({ books, onShelfUpdate }) => {
  return (
    <ol className="books-grid">
      { Array.isArray(books) && books.map(book => (
        <Book
          key={book.id}
          book={book}
          onShelfUpdate={onShelfUpdate}
        />
      )) }
    </ol>
  );
}

export default BooksGrid;
