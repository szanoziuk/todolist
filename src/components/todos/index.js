import React from 'react';
import { map } from 'lodash';
import { default as Todo } from '../../containers/todoItem-container';
import { default as AddTodo } from '../../containers/addItem-container';
import propTypes from 'prop-types';

import './index.css';

export const Todos = ({ todos }) => {
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
};

Todos.propTypes = {
  todos: propTypes.object.isRequired
};
