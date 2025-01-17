import React, { Component } from "react";
import BooksGrid from "./BooksGrid";

class BookShelf extends Component{
  render() {
    const { title, books, onShelfUpdate } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">
          <BooksGrid onShelfUpdate={onShelfUpdate} books={books} />
        </div>
      </div>
    );
  }
}

export default BookShelf;
