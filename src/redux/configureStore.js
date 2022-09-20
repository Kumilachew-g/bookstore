import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import bookStatusReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  bookStatusReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
