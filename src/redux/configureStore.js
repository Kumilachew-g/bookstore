import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import bookStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  booksReducer,
  bookStatusReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
