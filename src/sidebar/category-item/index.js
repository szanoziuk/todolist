import React from 'react';
import { CategoryList } from '../category-list';
import { filter } from 'lodash';
import { NavLink } from 'react-router-dom';

import './index.css';

export const CategoryItem = ({ category, categories, selectCatId, todos }) => {

  return(
      <li>
        <NavLink
          className="link"
          activeClassName="active"
          onClick={ () => selectCatId(category.id) }
          to={`/${category.id}`}
        >
          <span> { category.text } </span>
        </NavLink>
        {
          '  (' +  filter( todos, el => el.categoryId === category.id ).length + ')'
        }
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
