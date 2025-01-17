import React, { Component } from "react";
import { search, update } from '../BooksAPI';
import BooksGrid from "../components/ListBooks/BooksGrid";
import { Link } from "react-router-dom";

class Search extends Component {

  state = {
    books: []
  };

  handleSearch = (e) => {
    search(e.target.value).then((books) => {
      this.setState({
        books
      });
    })
  }

  render() {
    const { books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" onChange={this.handleSearch} placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={books} onShelfUpdate={update} />
        </div>
      </div>
    );
  }
}

export default Search;
