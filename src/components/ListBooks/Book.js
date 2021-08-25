import React, { Component } from 'react';
import { get } from "../../BooksAPI";

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

    return (
      <li>
        {book && (
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
              <div className="book-shelf-changer">
                <select defaultValue={book.shelf} onChange={this.handleShelfUpdate}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
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
