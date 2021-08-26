import React, { Component } from 'react';
import { get } from "../../BooksAPI";
import ShelfChanger from "./ShelfChanger";

class Book extends Component {

  state = {
    book: null
  }

  componentDidMount() {
    if (!this.props.book.hasOwnProperty('shelf')) {
      get(this.props.book.id).then((book) => {
        this.setState({
          book
        })
      })
    }else {
      this.setState({
        book: this.props.book
      })
    }
  }

  handleShelfUpdate = ({ target }) => {
    const { options, selectedIndex } = target;
    this.props.onShelfUpdate(this.props.book, options[selectedIndex].value);
  }

  render() {
    const { book } = this.state;
    const thumbnailUrl = (book && book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : '');

    return (
      <li>
        {book && (
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnailUrl}")` }}></div>
              <ShelfChanger
                book={book}
                handleShelfUpdate={this.handleShelfUpdate}
              />
            </div>
            <div className="book-title">{ book.title }</div>
            <div className="book-authors">{ book.hasOwnProperty('authors') ? book.authors[0] : '' }</div>
          </div>
        )}
      </li>
    );
  }
}

export default Book;
