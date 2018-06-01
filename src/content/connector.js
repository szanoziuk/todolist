import { toggleDone, saveTodo, deleteTodo, addTodo } from '../actions';
import { itemsForSelectedCategory } from '../selectors/todos';
import { selectedCategory } from '../selectors/categories';
import { createConnectorForSelector } from '../helpers';
import { createSelector } from 'reselect';

const contentSelector = createSelector(
  itemsForSelectedCategory,
  todos => ({
    todos: todos.toJS()
  })
);

const addSelector = createSelector(
  selectedCategory,
  selectedCategory => ({
    selectedCategory
  })
);

export const contentConnector = createConnectorForSelector(contentSelector);

export const todoConnector = createConnectorForSelector(null, {
  toggleDone,
  saveText: saveTodo,
  itemDelete: deleteTodo
});

export const addItemConnector = createConnectorForSelector(
  addSelector,
  { addItem: addTodo }
);
