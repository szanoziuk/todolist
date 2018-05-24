import { createImmutableSelector } from '../helpers';

const todos = state => state.todos;

export const items = createImmutableSelector(
    todos,
    todos => todos.get('items')
);
