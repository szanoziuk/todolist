import { createImmutableSelector } from '../helpers';
import { items } from './todos';

/*constants*/

/*actions*/

/*reducer*/

/*selectors*/
const completedItems = createImmutableSelector(
  items,
  items => items.filter( item => item.get('done') === true )
);

export const percentCompletedItems = createImmutableSelector(
  [ items, completedItems ],
  ( items, completedItems ) => ({
    percent: Math.round(( completedItems.size/items.size )*100)
  })
);
