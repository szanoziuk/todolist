import { createSelector } from 'reselect';
import { items } from './todos';

const completedItems = createSelector(
  items,
  items => items.filter( item => item.get('done') === true )
);

export const percentCompletedItems = createSelector(
  [ items, completedItems ],
  ( items, completedItems ) => ({ percent: Math.round(( completedItems.size/items.size )*100) })
);
