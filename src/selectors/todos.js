import { createImmutableSelector } from '../helpers';
import { selectedCategory } from './categories';

const todos = (state) => state.todos;

export const items = createImmutableSelector(
    todos,
    todos => todos.get('items')
);

export const itemsForSelectedCategory = createImmutableSelector(
    [items, selectedCategory],
    (items, selectedCategory) => {
        return items.filter(item => item.get('categoryId') === selectedCategory)
    }
);
