import React from 'react';
import { TodoItem } from './todo-item';
import { AddTask } from './addtask';
import { map } from 'lodash';
import { todoConnector } from './connector';
import { addItemConnector } from './connector';

import './index.css';

const Todo = todoConnector(TodoItem);
const AddTodo = addItemConnector(AddTask);

export const Content = ({ todos }) => {
  const children = map( todos, item => (
     <Todo item={ item } key={ item.id } />
  ));
  return(
    <div className="content">
      <ul>
        {
          children.length
            ? children
            : <p> There is no Todo items. </p>
        }
      </ul>
      <AddTodo />
    </div>
  );
}
