import React from 'react';
import { CategoryList } from './category-list';

export const Sidebar = ({ categories, selectCatId, todos, categoryId }) => {
  return(
    <CategoryList
      categories={ categories }
      selectCatId={ selectCatId }
      parentId={ null }
      todos={ todos }
      categoryId={ categoryId }
     />
  );
}
