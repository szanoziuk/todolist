import { combineReducers } from 'redux';
import { default as categories } from './categories';
import { default as todos } from './todos';

export const reducer = combineReducers({
  categories,
  todos
});
