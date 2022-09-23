import axios from 'axios';

const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const baseApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W8hBJ81jELKlP2JH8SLX/books';

const initialState = [];

export const getBooks = () => async (dispatch) => {
  const result = await axios.get(baseApi);
  const books = result.data;

  const allBooks = Object.entries(books);
  const fetchedBooks = [];
  allBooks.forEach(([key, value]) => {
    const id = key;
    const { title } = value[0];
    const { auther } = value[0];
    const { category } = value[0];
    fetchedBooks.push({
      id,
      title,
      auther,
      category,
    });
  });

  dispatch({ type: GET_BOOKS, fetchedBooks });
};

export const addBook = (book) => async (dispatch) => {
  const result = await axios.post(baseApi, {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  });
  const addedBook = result.data;
  if (addedBook === 'Created') {
    dispatch({
      type: ADD_BOOK,
      book,
    });
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  const result = await axios.delete(`${baseApi}/${bookId}`, {
    headers: {
      'content-type': 'application/json',
      'Access-Controll-Allow-Origin': '*',
    },
  });
  const removedBook = await result.data;
  if (removedBook) {
    dispatch({
      type: REMOVE_BOOK,
      bookId,
    });
  }
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...action.fetchedBooks];
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.bookId);
    default:
      return state;
  }
};

export default bookReducer;
