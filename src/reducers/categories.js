import * as constants from '../actions/constants';

const initialState = {
  list: {
     1: { id: 1, text: 'Learn React', parentId: null },
     2: { id: 2, text: 'Learn Router', parentId: 1 },
     3: { id: 3, text: 'Learn Redux', parentId: 2 },
     4: { id: 4, text: 'Learn Redux Saga', parentId: 3 },
     5: { id: 5, text: 'Learn lodash', parentId: null }
  },
  selectedCategory: 1
}

export const categories = function( state = initialState, action ) {
  const { type, payload } = action;
  switch( type ) {
    case constants.CATEGORY_SELECT:
      return Object.assign({}, state, { selectedCategory: payload });
    default:
      return state;
  }
};
