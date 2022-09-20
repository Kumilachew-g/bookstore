import React, { useState } from 'react';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';
// Import useDispatch
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const categories = [
  { value: '1', label: 'Action' },
  { value: '2', label: 'Science' },
  { value: '3', label: 'Economy' },
  { value: '4', label: 'Fiction' },
];

const InputBook = () => {
  // Use useDispatch to access the dispatch function
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ color: '#D9D9D9', padding: '0 50px' }}>ADD NEW BOOK</h1>
      <div className='form-container'>
        <input
          type='text'
          className='input-title'
          id='bookTitle'
          placeholder='Book Title'
          value={title}
          onChange={handleTitleChange}
          name='title'
        />
        <input
          type='text'
          className='input-title'
          id='bookAuthor'
          placeholder='Book Author'
          value={author}
          name='author'
          onChange={handleAuthorChange}
        />
        <Select options={categories} className='select' />
        <input type='submit' value='ADD BOOK' className='add-book' />
      </div>
    </form>
  );
};

export default InputBook;
