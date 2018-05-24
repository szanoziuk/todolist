import * as constants from '../actions/constants';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  items: {
    1: { id: 1, text: 'Learn React', done: true, categoryId: 1 },
    2: { id: 2, text: 'Learn Router', done: false, categoryId: 2 },
    3: { id: 3, text: 'Learn Redux', done: false, categoryId: 1 },
    4: { id: 4, text: 'Learn Redux', done: false, categoryId: 3 }
  }
});

export const todos = function( state = initialState, action ) {
  const { type, payload } = action;
  switch( type ) {
    case constants.TODO_DONE_TOGGLE: {
      return state.updateIn( [ 'items', `${ payload }`, 'done' ], done => !done );
    }
    default:
      return state;
  }
};
