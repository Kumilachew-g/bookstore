import React from 'react';
import Select from 'react-select';

const categories = [
  { value: '1', label: 'Action' },
  { value: '2', label: 'Science' },
  { value: '3', label: 'Economy' },
  { value: '4', label: 'Fiction' },
];

const InputBook = () => (
  <form>
    <h1 style={{ color: '#D9D9D9', padding: '0 50px' }}>ADD NEW BOOK</h1>
    <div className="form-container">
      <input
        type="text"
        className="input-title"
        id="bookTitle"
        placeholder="Book Title"
      />
      <Select options={categories} className="select" />
      <input type="submit" value="ADD BOOK" className="add-book" />
    </div>
  </form>
);

export default InputBook;
