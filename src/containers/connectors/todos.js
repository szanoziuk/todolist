import {
  toggleDone, saveTodo, deleteTodo, addTodo, fetchTodos
} from '../../reducers/todos';
import { itemsForSelectedCategory } from '../../reducers/todos';
import { selectedCategory } from '../../reducers/categories';
import { createConnectorForSelector, createImmutableSelector } from '../../helpers';

const todosSelector = createImmutableSelector(
  itemsForSelectedCategory,
  todos => ({
    todos: todos.toJS()
  })
);

const addSelector = createImmutableSelector(
  selectedCategory,
  selectedCategory => ({
    selectedCategory
  })
);

export const todosConnector = createConnectorForSelector(todosSelector, {
  fetchTodos
});

export const todoItemConnector = createConnectorForSelector(null, {
  toggleDone,
  saveText: saveTodo,
  itemDelete: deleteTodo
});

export const addItemConnector = createConnectorForSelector(
  addSelector,
  { addItem: addTodo }
);
