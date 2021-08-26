import React from 'react';

const ShelfChanger = ({ book, handleShelfUpdate }) => (
  <div className="book-shelf-changer">
    <select defaultValue={book.shelf} onChange={handleShelfUpdate}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
);

export default ShelfChanger;
