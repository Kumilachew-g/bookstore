import React from 'react';

// Import useSelector
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const BookLists = () => {
  // Add useSelector to consume the state
  const books = useSelector((state) => state.booksReducer);
  const mapBooks = books.map((book) => (
    <Book key={book.id} id={book.id} title={book.title} author={book.author} />
  ));

  return (
    <div className='book-lists'>
      {mapBooks}
      <InputBook />
    </div>
  );
};

export default BookLists;
