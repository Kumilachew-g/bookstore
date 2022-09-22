import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      author,
      category: 'Not specified',
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <div className="form-container">
        <input
          type="text"
          className="input-title"
          id="bookTitle"
          placeholder="Book Title"
          value={title}
          onChange={handleTitleChange}
          name="title"
        />
        <input
          type="text"
          className="input-title"
          id="bookTitle"
          placeholder="Book Author"
          value={author}
          onChange={handleAuthorChange}
          name="author"
        />

        <input type="submit" value="ADD BOOK" className="add-book" />
      </div>
    </form>
  );
};

export default InputBook;
