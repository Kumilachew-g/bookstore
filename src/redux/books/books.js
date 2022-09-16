import React from 'react';

const BooksPage = () => (
  <>
    <div className="books-section d-flex">
      <h2>Book List</h2>
      <button type="button">Remove</button>
    </div>
    <input type="text" placeholder="Book Title" name="addBooks" />
    <button type="button">Add Book</button>
  </>
);

export default BooksPage;
