import {
  list, selectedCategory, selectCategory, fetchCategories, addCategory
} from '../../reducers/categories';
import { items } from '../../reducers/todos';
import { createImmutableSelector, createConnectorForSelector } from '../../helpers';

const sidebarSelector = createImmutableSelector(
  [ list, selectedCategory, items ],
  ( list, selectedCategory, items ) => ({
    categories: list.toJS(),
    todos: items.toJS(),
    categoryId: selectedCategory
  })
);

export const sidebarConnector = createConnectorForSelector(
  sidebarSelector,
  {
    selectCatId: selectCategory,
    fetchCategories,
    addCategory
  }
);
