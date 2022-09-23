import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const categories = ['Action', 'Science', 'Fiction', 'Economy'];

const InputBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('Action');
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
          required
          value={title}
          onChange={handleTitleChange}
          name="title"
        />
        <select
          className="select"
          value={category}
          onChange={handleCategoryChange}
          name="category"
        >
          {categories.map((categ) => (
            <option key={uuidv4()} value={categ}>
              {categ}
            </option>
          ))}
        </select>

        <input type="submit" value="ADD BOOK" className="add-book" />
      </div>
    </form>
  );
};

export default InputBook;
