import React from 'react';
import { CategoryItem } from '../category-item';
import { map, compact, isEmpty } from 'lodash';

import './index.css';

export const CategoryList = ({ categories, parentId, selectCatId, todos }) => {
  const children = compact(map( categories, category => {
    if ( category.parentId === parentId ) {
      return(
        <CategoryItem
          category={ category }
          categories={ categories }
          selectCatId={ selectCatId }
          key={ category.id }
          todos={ todos }
        />
      )}
  }));
  if ( !isEmpty( children ) ) {
    return ( <ul> { children } </ul> );
  }
  return null
}
