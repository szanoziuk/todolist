import React from 'react';
import { TodoItem } from './todo-item';
import { AddTask } from './addtask';
import { map, filter } from 'lodash';

import './index.css';

export const Content = ({ todos, toggleDone, saveText, itemDelete, addItem, selectedId }) => {
  const filteredTodos = filter( todos, el => el.categoryId === selectedId );
  const children =   map( filteredTodos, item => (
     <TodoItem
      item={ item }
      key={ item.id }
      toggleDone={ toggleDone }
      saveText={ saveText }
      itemDelete={ itemDelete }
    />
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
      <AddTask addItem={ addItem } />
    </div>
  );
}
