const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Set the initial state to be an empty array of books.
// const initialsState = [];

const books = [
  {
    id: 1,
    title: 'Basic Coding',
    author: 'Haddis',
  },
  {
    id: 2,
    title: 'The War',
    author: 'Powers',
  },
  {
    id: 3,
    title: 'Programmers',
    author: 'Henok',
  },
];

// Define action types and Export Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// Write reducer and export it as default
const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
