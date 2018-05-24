import React from 'react';
import { CategoryList } from '../category-list';
import { filter } from 'lodash';

import './index.css';

export const CategoryItem = ({ category, categories, selectCatId, todos }) => {
  const qty = filter( todos, el => el.categoryId === category.id ).length;
  return(
      <li>
        <button
          onClick={ () => selectCatId(category.id) }
        >
          <span> { category.text } </span>
        </button>
        { `(${ qty })` }
        {
          <CategoryList
            categories={ categories }
            selectCatId={ selectCatId }
            parentId={ category.id }
            todos={ todos }
          />
        }
      </li>
  );
}
