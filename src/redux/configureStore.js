import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import bookStatusReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  bookStatusReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
