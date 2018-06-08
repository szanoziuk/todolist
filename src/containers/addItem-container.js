import React from 'react';
import { AddTask } from '../components/add-task';
import { addItemConnector } from './connectors/todos';

const  AddTaskContainer = ( props ) => {
  return(
      <AddTask {...props} />
  );
}

export default addItemConnector( AddTaskContainer );
