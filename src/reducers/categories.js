import Immutable from 'immutable';
import { createAction, createImmutableSelector }from '../helpers'

/*constants*/
export const CATEGORY_SELECT = 'app/categories/CATEGORY_SELECT';
export const CATEGORY_ADD = 'app/categories/CATEGORY_ADD';

export const FETCH_CATEGORIES_REQUEST = 'app/categories/FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'app/categories/FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'app/categories/FETCH_CATEGORIES_FAILURE';

/*actions*/
export const selectCategory = createAction(CATEGORY_SELECT);
export const addCategory = createAction(CATEGORY_ADD);

export const fetchCategories = () => dispatch => {
  dispatch({
    type: FETCH_CATEGORIES_REQUEST
  });

  fetch('categories.json').then( res => res.json() ).then( data => {
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: data
    });
  }).catch( err => {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err
    });
  });
};

/*reducer*/
const initialState = Immutable.fromJS({
  list: {},
  selectedCategory: 1,
  isFetching: false
});

export default function reducer( state = initialState, action ) {
  const { type, payload } = action;

  switch( type ) {
    case FETCH_CATEGORIES_REQUEST: {
      return state.set( 'isFetching', true );
    }

    case FETCH_CATEGORIES_SUCCESS: {
      return state
        .set( 'list', Immutable.fromJS(payload) )
        .set( 'isFetching', false );
    }

    case FETCH_CATEGORIES_FAILURE: {
      return state.set( 'isFetching', false );
    }

    case CATEGORY_ADD: {
      const { text } = payload;
      const id = state.get('list').size + 1;
      const parentId = state.get( 'selectedCategory' ) || null;
      const newCategory = Immutable.fromJS({
        id,
        text,
        parentId
      });
      return state.update( 'list', value => value.set( `${id}`, newCategory ) );
    }

    case CATEGORY_SELECT: {
      return state.set('selectedCategory', payload);
    }

    default:
      return state;
  }
};

/*selectors*/
const data = (state) => state.categories;

export const list = createImmutableSelector(
    data,
    data => data.get('list')
);

export const selectedCategory = createImmutableSelector(
    data,
    data => data.get('selectedCategory')
);
