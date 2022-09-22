import React from 'react';
import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const Book = ({ id, title, category }) => (
  <>
    <div className='card-styling'>
      <div>
        <span className='book-title'>{title}</span>
        <br />
        <span className='book-category'>{category}</span>
        <br />
        <span className='book-author'>By Kumilachew</span>
        <br />
        <button type='button' className='book-btn comments'>
          Comments
        </button>
        <RemoveBook id={id} />
        <button type='button' className='book-btn'>
          Edit
        </button>
      </div>
      <div className='progress-section'>
        <img
          alt='progress'
          // variant="top"
          src='https://i.stack.imgur.com/7wcxc.png'
          className='progress-image'
        />
        <div>
          <span className='percentage'>28%</span>
          <br />
          <span className='completed'>Completed</span>
        </div>
      </div>
      <div className='chapter-section'>
        <span className='current-chapter'>CURRENT CHAPTER</span>
        <br />
        <span className='chapter'>Chapter 18</span>
        <br />
        <button type='button' className='update-progress'>
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  </>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
