import { default as todos } from '../reducers/todos';
import Immutable from 'immutable';

describe('todos reducer', () => {
    it('should handle TODO_ADD', () => {

      const initialState = Immutable.fromJS({ items: {} })
      const action = {
        type: 'app/todos/TODO_ADD',
        payload: {
          text: 'test',
          categoryId: '1'
        }
      };
      const state = todos( initialState, action );
      const expectedResult = Immutable.Map({
        id: 1,
        text: 'test',
        done: false,
        categoryId: '1'
      });

      expect( state.getIn(['items', '1']) ).toEqual( expectedResult );
      expect( state.getIn(['items']).size ).toBe( initialState.getIn(['items']).size + 1 );
  });

  it('should handle DONE', () => {
    const initialState = Immutable.fromJS({
       items: { 1: { id: 1, text: 'Learn React', done: true, categoryId: 1 } }
    });

    const action = {
      type: 'app/todos/TODO_DONE_TOGGLE',
      payload: 1
    };

    const state = todos( initialState, action );

    const expectedResult = !initialState.getIn(['items', '1', 'done'])

    expect( state.getIn(['items', '1', 'done']) ).toBe( expectedResult  );
  });

  it('should handle TODO_DELETE', () => {

    const initialState = Immutable.fromJS({
       items: { 1: { id: 1, text: 'Learn React', done: true, categoryId: 1 } }
    });
    const action = {
      type: 'app/todos/TODO_DELETE',
      payload: 1
    };
    const state = todos( initialState, action );

    expect( state.getIn(['items']).has( `${ action.payload }`) ).toBe( false );
    expect( state.getIn(['items']).size ).toBe( initialState.getIn(['items']).size - 1 );

  });

});
