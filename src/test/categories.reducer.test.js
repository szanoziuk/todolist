import { default as categories } from '../reducers/categories';
import Immutable from 'immutable';

describe('Categories reducer', () => {
  it('should select category', () => {

    const initialState = Immutable.Map({ selectedCategory: 1 });
    const action = { type: 'app/categories/CATEGORY_SELECT', payload: 2 };
    const state = categories(initialState, action);

    expect(state.get('selectedCategory')).toBe(2);
  });

  it('should add category', () => {

    const initialState = Immutable.fromJS({ list: {} })
    const action = {
      type: 'app/categories/CATEGORY_ADD',
      payload: {
        text: 'test'
      }
    };
    const state = categories( initialState, action );
    const expectedResult = Immutable.Map({
      id: 1,
      text: 'test',
      parentId: null
    });

    expect( state.getIn(['list', '1']) ).toEqual( expectedResult );
    expect( state.getIn(['list']).size ).toBe( initialState.getIn(['list']).size + 1 );

  });
});
