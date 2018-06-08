import React from 'react';
import { CategoryItem } from '../category-item';
import { map, compact, isEmpty } from 'lodash';
import propTypes from 'prop-types';

import './index.css';

export const CategoryList = ({ categories, parentId, selectCatId, todos, categoryId }) => {
  const children = compact(map( categories, category => {
    if ( category.parentId === parentId ) {
      return(
        <CategoryItem
          category={ category }
          categories={ categories }
          selectCatId={ selectCatId }
          key={ category.id }
          todos={ todos }
          categoryId={ categoryId }
        />
      )}
  }));
  if ( !isEmpty( children ) ) {
    return ( <ul> { children } </ul> );
  }
  return null
};

CategoryList.propTypes = {
  categories: propTypes.object.isRequired,
  parentId: propTypes.number,
  selectCatId: propTypes.func.isRequired,
  todos: propTypes.object.isRequired,
  categoryId: propTypes.number.isRequired
};
