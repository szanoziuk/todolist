import { connect } from 'react-redux';
import { list, selectedCategory } from '../selectors/categories';
import { items } from '../selectors/todos';
import { selectCategory } from '../actions';
import { createImmutableSelector } from '../helpers';

const sidebarSelector = createImmutableSelector(
  [ list, selectedCategory, items ],
  ( list, selectedCategory, items ) => ({
    categories: list.toJS(),
    todos: items.toJS(),
    categoryId: selectedCategory
  })
);

export const sidebarConnector = connect(
  sidebarSelector,
  { selectCatId: selectCategory }
);
