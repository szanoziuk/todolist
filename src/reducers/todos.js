import Immutable from 'immutable';
import { createAction, createImmutableSelector }from '../helpers'
import { selectedCategory } from './categories';

/*constants*/
export const TODO_DONE_TOGGLE = 'app/todos/TODO_DONE_TOGGLE';
export const TODO_SAVE = 'app/todos/TODO_SAVE';
export const TODO_DELETE = 'app/todos/TODO_DELETE';
export const TODO_ADD = 'app/todos/TODO_ADD';

export const FETCH_TODOS_REQUEST = 'app/todos/FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'app/todos/FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'app/todos/FETCH_TODOS_FAILURE';

/*actions*/
export const toggleDone = createAction(TODO_DONE_TOGGLE);
export const saveTodo = createAction(TODO_SAVE);
export const deleteTodo = createAction(TODO_DELETE);
export const addTodo = createAction(TODO_ADD);

export const fetchTodos = () => dispatch => {
  dispatch({
    type: FETCH_TODOS_REQUEST
  });

  fetch('todos.json').then( res => res.json() ).then( data => {
    dispatch({
      type: FETCH_TODOS_SUCCESS,
      payload: data
    });
  }).catch( err => {
    dispatch({
      type: FETCH_TODOS_FAILURE,
      payload: err
    });
  });
};

/*reducer*/
const initialState = Immutable.fromJS({
  items: {},
  isFetching: false
});

export default function reducer( state = initialState, action ) {
  const { type, payload } = action;

  switch( type ) {
    case FETCH_TODOS_REQUEST: {
      return state.set( 'isFetching', true );
    }

    case FETCH_TODOS_SUCCESS: {
      return state
        .set( 'items', Immutable.fromJS(payload) )
        .set( 'isFetching', false );
    }

    case FETCH_TODOS_FAILURE: {
      return state.set( 'isFetching', false );
    }

    case TODO_DONE_TOGGLE: {
      return state.updateIn( ['items', `${ payload }`, 'done'], done => !done );
    }

    case TODO_SAVE: {
      const { id, text } = payload;
      return state.updateIn( ['items', `${ id }`, 'text'], () => text );
    }

    case TODO_ADD: {
      const { text, categoryId } = payload;
      const id = state.get('items').size + 1;
      const newTodo = Immutable.fromJS({
        id,
        text,
        done: false,
        categoryId
      });
      return state.update( 'items', value => value.set( `${id}`, newTodo ) );
    }

    case TODO_DELETE: {
      return state.deleteIn(['items', `${payload}`]);
    }

    default:
      return state;
  }
};

/*selectors*/
const todos = (state) => state.todos;

export const items = createImmutableSelector(
    todos,
    todos => todos.get('items')
);

export const itemsForSelectedCategory = createImmutableSelector(
    [items, selectedCategory],
    (items, selectedCategory) => {
        return items.filter(item => item.get('categoryId') === selectedCategory)
    }
);
