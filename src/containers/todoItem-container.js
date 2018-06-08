import React from 'react';
import { TodoItem } from '../components/todo-item';
import { todoItemConnector } from './connectors/todos';

const  TodoItemContainer = ( props ) => {
  return(
      <TodoItem {...props} />
  );
}

export default todoItemConnector( TodoItemContainer );
