import React, { Component } from 'react';
import { Todos } from '../components/todos';
import { todosConnector } from './connectors/todos';

class TodosContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return(
      <Todos {...this.props} />
    );
  }
}

export default todosConnector( TodosContainer );
