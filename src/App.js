import React from 'react'
import './App.css'
import ListBooks from "./views/ListBooks";
import { Route, Link } from 'react-router-dom'
import Search from "./views/Search";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={Search} />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <ListBooks />
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
