import React, { Component } from "react";
import Header from "../components/ListBooks/Header";
import BookShelf from "../components/ListBooks/BookShelf";
import { getAll, update } from '../BooksAPI';


class ListBooks extends Component {

  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: []
  };

  componentDidMount() {
    this.initialize();
  }

  filterBooksByShelf = (books, shelf) => (books.filter(book => (book.shelf === shelf)))

  initialize = () => {
    getAll().then(books => {
      this.setState({
        currentlyReadingBooks: this.filterBooksByShelf(books, 'currentlyReading'),
        wantToReadBooks: this.filterBooksByShelf(books, 'wantToRead'),
        readBooks: this.filterBooksByShelf(books, 'read')
      });
    })
  }

  updateShelf = (book, shelf) => {
    update(book, shelf).then(this.initialize)
  }

  render() {
    const { currentlyReadingBooks, wantToReadBooks, readBooks } = this.state;

    return (
      <div>
        <div className="list-books">
          <Header title="MyReads" />
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              onShelfUpdate={this.updateShelf}
              title="Currently Reading"
              books={currentlyReadingBooks}
            />
            <BookShelf
              onShelfUpdate={this.updateShelf}
              title="Want to Read"
              books={wantToReadBooks}
            />
            <BookShelf
              onShelfUpdate={this.updateShelf}
              title="Read"
              books={readBooks}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default ListBooks;
