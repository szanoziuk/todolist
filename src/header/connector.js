import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items
  }
}

export const headerConnector = connect(mapStateToProps);
