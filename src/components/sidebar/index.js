import React from 'react';
import { CategoryList } from '../category-list';
import { AddCategory } from '../add-category';
import propTypes from 'prop-types';

export const Sidebar = ( props ) => {
  const { categories, selectCatId, todos, categoryId, addCategory } = props;
  return(
    <div className="sidebar">
      <AddCategory addCategory={ addCategory }/>
      <CategoryList
        categories={ categories }
        selectCatId={ selectCatId }
        parentId={ null }
        todos={ todos }
        categoryId={ categoryId }
      />
    </div>
  );
};

Sidebar.propTypes = {
  categories: propTypes.object.isRequired,
  selectCatId: propTypes.func.isRequired,
  addCategory: propTypes.func.isRequired,
  todos: propTypes.object.isRequired,
  categoryId: propTypes.number.isRequired
}
